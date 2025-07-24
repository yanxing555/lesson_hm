import {
    useParams,
    useNavigate,
} from "react-router-dom"
import {
    useEffect,
} from 'react'
import {
    useRepos
} from '@hooks/useRepos';

const RepoList = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    console.log(useParams());
    const {repos,loading,error}= useRepos(id);// 自定义hooks
    console.log(repos,loading,error)
    useEffect(() => {
        // 
        if (!id.trim()) {
            navigate('/');
            return;
        }
        console.log(id);
        
        
    }, [])

    return (
        <>
            <h1>RepoList</h1>
        </>
    )

}

export default RepoList