import {
  useState,
  useEffect,
  Suspense,
  lazy,
} from 'react'
import {
  Routes,
  Route,
  Link,
  Navigate
} from 'react-router-dom'
import Loading from './components/Loading'
const RepoList = lazy(() => import('./pages/RepoList'))
const RepoDetail = lazy(() => import('./pages/RepoDetail'))
const Home = lazy(() => import('./pages/Home'))
const NotFound = lazy(() => import('./pages/NotFound'))

function App() {
  // useEffect(() => {
  //   (async () => {
  //     const res = await getRepos('WJH-irving');
  //     const repo = await getRepo('WJH-irving', 'learn');
  //     console.log(res);
  //     console.log(repo);
  //   })()
  //   return () => {
  //     console.log('组件卸载')
  //   }
  // }, [])

  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/users/:id/repos" element={<RepoList />} />
        <Route path="/users/:id/repos/:repoId" element={<RepoDetail />} />
      </Routes>
    </Suspense>
  )
}

export default App
