import { useState } from 'react'
import './repos.css'
function Repos() {
  // const repos = [
  //   {
  //     id: 1,
  //     name: "lesson_hm"
  //   },
  //   {
  //     id: 2,
  //     name: "algo-hello"
  //   },
  //   {
  //     id: 3,
  //     name: "prompt"
  //   }
  // ]
  // vue templtae ? 
  // js 区域 
  // 使用一个响应式数据状态
  // 返回数组 解构，数组的第一项是当前的状态，数组的第二项是修改状态的方法
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(true);

  fetch('https://api.github.com/users/uyu8/repos')
    .then(res => res.json())
    .then(data => {
      // console.log(data)
      setLoading(false);
      setRepos(data)
    })
  return (
    // html? react 发明了 JSX 语法 js 写HTML
    // JS  
    <div className="github-repos">
      <h2>Github Repositories</h2>
      {loading && <p>loading...</p>}
      <ul>
      {
        repos.map(repo => (
          <li key={repo.id}>
            <a href={repo.html_url}>{repo.name}</a>
            <span>作者：{repo.owner.login}</span>
          </li>
        ))
      }
      </ul>
      {!loading && repos.length === 0 && <p>没有repos</p>}
    </div>
  )
}

export default Repos