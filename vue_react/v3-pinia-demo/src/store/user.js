// 全局共享的用户状态
import { defineStore } from "pinia";
import {
    ref,
    reactive
}from 'vue'
//hooks 编程
export const useUserStore =defineStore("user",()=>{
    const isLogin =ref(false);
    const tologin =()=>{
        isLogin.value=true;
    }
    const toLogout=()=>{
        isLogin.value=false;
    }


    const userInfo =reactive({
        name:"",
        avatar:"",
        message:0,
        uid:null
    })
    const setUserInfo=()=>{
        userInfo.name="言兴";
        userInfo.avatar=""
        userInfo.message=10
        userInfo.uid=null
    }

    return {
        isLogin,
        tologin,
        toLogout,
        userInfo,
        setUserInfo
    }
})