import {
    NextRequest, NextResponse
} from 'next/server';
import {
    prisma
} from '@/lib/db'
import {
    createTokens,
    verifyToken
} from '@/lib/jwt'
// 引入依赖

export async function GET(request: NextRequest) {
    // 处理get请求 使用异步处理get请求
    try {
        console.log('refresh----------------------------');
        const refreshToken = request.cookies.get("refresh_token")?.value; //从cookie中获取到refresh_token
        const redirectUrl = request.nextUrl.searchParams.get('redirect') // 从URL中获取重定向地址默认为dahboard
            ||"/dashboard";
        
        if (!refreshToken) {
            return NextResponse.redirect(new URL('/login', request.url));
            // 如果检测到没有refreshToken 就返回登录页面
        }

        const refreshPayload = await verifyToken(refreshToken); // 验证refreshToken
        if (!refreshPayload || !refreshPayload.userId) {
            // 如果refreshPayload 不存在或者不存在userId 就返回登录页面
            return NextResponse.redirect(new URL('/login', request.url))
        }

        const userId = refreshPayload.userId as number;
        // 刷新？ 数据库再校验一次
        const user = await prisma.user.findUnique({
            where: {
                id: userId
            }
        })
        if (!user || user.refreshToken !== refreshToken) {
            return NextResponse.redirect(new URL('/login', request.url))
        }

        const {
            accessToken: newAccessToken,
            refreshToken: newRefreshToken
        } = await createTokens(userId)

        await prisma.user.update({
            where: {
                id: userId
            },
            data:{refreshToken: newRefreshToken}
        })

        

        const response = NextResponse.redirect(new URL(redirectUrl, request.url));
        response.cookies.set('access_token', newAccessToken, {
            httpOnly: true,
            maxAge: 60*15,
            sameSite: 'strict',
            path: '/'
        })
        response.cookies.set('refresh_token', newRefreshToken, {
            httpOnly: true,
            maxAge: 60*60*24*7,
            sameSite: 'strict',
            path: '/'
        })
        return response

    } catch(err) {
        console.error('Token refresh error:', err);
        return NextResponse.redirect(new URL('/login', request.url))
    }
}