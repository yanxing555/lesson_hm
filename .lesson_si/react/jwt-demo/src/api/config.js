import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:5173/api';

axios.interceptors.request.use((config)=>{
    // if(token){
    //     config.headers.Authorization = `Bearer ${token}`;
    
    // }
     const token = localStorage.getItem('token')||"";
     if(token){
        config.headers.Authorization = `Bearer ${token}`;
     }
    return config;
})

export default axios;