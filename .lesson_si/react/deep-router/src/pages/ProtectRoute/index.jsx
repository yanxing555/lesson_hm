import { 
    Navigation 
    
} from 'react-router-dom';
// 鉴权组件
const ProtectRoute = (props)=>{
    // console.log(props);
      // 并非子组件 
    // children 提升定制性
    const {children}=props;
    const isLogin =localStorage.getItem('isLogin')=== 'true'  
    return (
        <>
        ProtectRoute
        {children}
        </>
    )
}

export default ProtectRoute