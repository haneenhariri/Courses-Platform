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
import AddStdSay from './components/DashBoardComp/StudentReviews/AddStdSay/AddStdSay'
import AddArticle from './components/DashBoardComp/DashArticle/AddArticle/AddArticle'
import EditArticle from './components/DashBoardComp/DashArticle/EditArticle/EditArticle'
import EditStd from './components/DashBoardComp/StudentReviews/EditStd/EditStd'
import ShowStd from './components/DashBoardComp/StudentReviews/ShowStd/ShowStd'
import ShowArticle from './components/DashBoardComp/DashArticle/ShowArticle/ShowArticle'
import CrudData from './const/data/CrudData'
function App() {
  
  return (
    <>
    <CrudData/>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/blog' element={<Blog/>} />
        <Route path='/article' element={<ArticlePage/>} />
        <Route path='/dash' element={<Dashboard/>}>
          <Route path='' element={<DashStdSay/>}/>
          <Route path='dashstdsay/add' element={<AddStdSay/>}/>
          <Route path='dashstdsay/edit/:id' element={<EditStd/>}/>
          <Route path='dashstdsay/show/:id' element={<ShowStd/>}/>
          <Route path='articlelist' element={<DashArticles/>}/>
          <Route path='articlelist/add' element={<AddArticle/>}/>
          <Route path='articlelist/edit/:id' element={<EditArticle/>}/>
          <Route path='articlelist/show/:id' element={<ShowArticle/>}/>

        </Route>
      </Routes>
    </>
  )
}

export default App
