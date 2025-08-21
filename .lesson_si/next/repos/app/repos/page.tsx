import {
    Card,
    CardHeader,
    CardTitle,
    CardContent
} from '@/components/ui/card';
import { type Repo } from '@/app/types/repos';

export default async function ReposPage() {
    // 在服务器端获取数据
    // const result = await fetch('/api/repos');
    // const repos = result.json();
    // console.log(repos);
    const response = await fetch('https://api.github.com/users/WJH-irving/repos')
    const repos:Repo[] = await response.json();

    return (
        <main className="container mx-auto p-4 ">
            <h1 className="text-2xl font-bold mb-4">Github Repos</h1>

        </main>
    )
}