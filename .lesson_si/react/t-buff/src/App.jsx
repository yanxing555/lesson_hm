import './App.css'
import {
  Suspense,
  lazy
} from 'react';
import {
  Routes,
  Route,
  Navigate
} from 'react-router-dom'
import MainLayout from '@/components/MainLayout'
import BlankLayout from '@/components/BlankLayout'

const Home = lazy(() => import('@/pages/Home'));
const Find = lazy(() => import('@/pages/Find'));
const Collection = lazy(() => import('@/pages/Collection'));
// const Trip = lazy(() => import('@/pages/Trip'));
const Account = lazy(() => import('@/pages/Account'));
const Search = lazy(() => import('@/pages/Search'));
// const Article = lazy(() => import('@/pages/Article'));
// const Detail = lazy(() => import('@/pages/Detail'));
// const ArticleNew = lazy(() => import('@/pages/ArticleNew'));

function App() {

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        {/* 带有tabbar的Layout */}
        <Routes >
          <Route element={<MainLayout />}>
            <Route path="/" element={<Navigate to="/home" />}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/discount" element={<Find/>}/>
            <Route path="/collection" element={<Collection/>}/>
            <Route path="/trip" element={<Trip/>}/>
            <Route path="/account" element={<Account/>}/>
           
          </Route>
          {/* 空的Layout */}
          <Route element={<BlankLayout />}>
            <Route path="/search" element={<Search />}/>
            {/* <Route path="/article"element={<Article/>}/> */}
            {/* <Route path="/article/new" element={<ArticleNew />}/> */}
            {/* <Route path="/detail" element={<Detail />}/> */}
          </Route>
        </Routes>
      </Suspense>
    </>
  )
}

export default App