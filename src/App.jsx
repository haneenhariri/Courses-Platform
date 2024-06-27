import './App.css'
import MainPage from './pages/MainPage/MainPage'
import Courses from './pages/Courses/Courses'
import Blog from './pages/Blog/Blog'
import ArticlePage from './pages/ArticlePage/ArticlePage'
import './../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Route,Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard/Dashboard'
import DashArticlesList from './components/DashBoardComp/DashArticle/DashArticlesList/DashArticles'
import AddStdSay from './components/DashBoardComp/StudentReviews/AddStdSay/AddStdSay'
import AddArticle from './components/DashBoardComp/DashArticle/AddArticle/AddArticle'
import EditStd from './components/DashBoardComp/StudentReviews/EditStd/EditStd'
import EditArticle from './components/DashBoardComp/DashArticle/EditArticle/EditArticle'
import ShowStd from './components/DashBoardComp/StudentReviews/ShowStd/ShowStd'
import ShowArticle from './components/DashBoardComp/DashArticle/ShowArticle/ShowArticle'
import DashStdSay from './components/DashBoardComp/StudentReviews/DashStdSay/DashStdSay'

function App() {
  
  return (
    <>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/blog' element={<Blog/>} />
        <Route path='/article' element={<ArticlePage/>} />
        <Route path='dash' element={<Dashboard/>}>
          <Route index element={<DashStdSay/>}/>
          <Route path='DashStdSay' element={<DashStdSay/>}/>
          <Route path='DashStdSay/add' element={<AddStdSay/>}/>
          <Route path='DashStdSay/edit/:id' element={<EditStd/>}/>
          <Route path='DashStdSay/show/:id' element={<ShowStd/>}/>
          <Route path='DashArticle' element={<DashArticlesList/>}/>
          <Route path='DashArticle/add' element={<AddArticle/>}/>
          <Route path='DashArticle/edit/:id' element={<EditArticle/>}/>
          <Route path='DashArticle/show/:id' element={<ShowArticle/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
