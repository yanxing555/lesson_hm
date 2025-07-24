// {
//     repos:[],
//     loading:false,
//     error:null,
// }
// 保证代码状态的正确性
export const repoReducer =(state,action)=>{
    switch(action.type){
        case 'FETCH_START':

            return {
                ...state,
                loading:true,
                error:null
            }
        case 'FETCH_SUCCESS':
            return {
                ...state,
                loading:false,
                repos:action.payload,
                error:null
            }
        case 'FETCH_ERROR':
            return {
                ...state,
                loading:false,
                repos:[],
                error:action.payload
            }
        default:
            return state;
    }
}