// 请求
import {
    getRepoList
}from '../api/repo'
import {
    create
} from 'zustand'

export const useRepoStore = create((set)=>({
    repos:[],
    loading: false,
    error: null,
    fetchRepoList:async (username)=>{
        // 业务
        set({loading:true,error:null})
        try{
            const res = await getRepoList(username)
            set({repos:res.data})
        }catch(err){
            set({error:err.message,loading:false})
        }finally{
            set({loading:false})
        }
    }
}));