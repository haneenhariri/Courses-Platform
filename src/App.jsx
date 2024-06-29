import './App.css'
import MainPage from './pages/MainPage/MainPage'
import Courses from './pages/Courses/Courses'
import Blog from './pages/Blog/Blog'
import ArticlePage from './pages/ArticlePage/ArticlePage'
import './../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Route,Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard/Dashboard'
import DashStdSay from './components/DashBoardComp/StudentReviews/DashStdSay/DashStdSay'
import DashArticles from './components/DashBoardComp/DashArticle/DashArticlesList/DashArticles'

function App() {
  
  return (
    <>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/blog' element={<Blog/>} />
        <Route path='/article' element={<ArticlePage/>} />
        <Route path='/dash' element={<Dashboard/>}>
          <Route path='dashstdsay' element={<DashStdSay/>}/>
          <Route path='articlelist' element={<DashArticles/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
