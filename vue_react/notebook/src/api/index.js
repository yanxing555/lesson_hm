import axios from '@/utils/axios' 
 
// 所有的请求 
// 后端提供接口
export const login = async(username,password) => 
    await axios.post('http://localhost:7001/login')