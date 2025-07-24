import{
    useRepoStore
}from '../../store/repos'
import { useEffect } from 'react'



const RepoList = ()=>{
    const {
        repos,
        loading,
        error,
        fetchRepoList
    } = useRepoStore()
    useEffect(()=>{
        fetchRepoList()
    },[])
    if(loading) return <p>Loading...</p>;
    if(error) return <p>{error}</p>

    return (
        <>
            <h1>RepoList</h1>
            <ul>
                {
                    repos.map(repo=>(
                        <li key={repo.id}>
                            <a href={repo.html_url} target="_blank" rel=" noreferrer">{repo.name}</a>
                            <p>{repo.description ||'No description'}</p>
                            </li>
                    )
                        
                    )
                }
            </ul>
            <button onClick={() => fetchRepoList('WJH-irving')}>获取Repo列表</button>
        </>
    )
}
export default RepoList
