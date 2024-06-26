import './App.css'
import MainPage from './pages/MainPage/MainPage'
import Courses from './pages/Courses/Courses'
import Blog from './pages/Blog/Blog'
import ArticlePage from './pages/ArticlePage/ArticlePage'
import './../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router, Route,Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard/Dashboard'
import DashArticles from './components/DashArticles/DashArticles'
import AddStdSay from './components/AddStdSay/AddStdSay'
import AddArticle from './components/AddArticle/AddArticle'
import EditStd from './components/EditStd/EditStd'
import EditArticle from './components/EditArticle/EditArticle'
import ShowStd from './components/ShowStd/ShowStd'
import ShowArticle from './components/ShowArticle/ShowArticle'
import DashStdSay from './components/DashStdSay/DashStdSay'

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
          <Route path='dashArticle' element={<DashArticles/>} />
        </Route>


{/*         <Router>
          <Routes>
            
          </Routes>
        </Router> */}
      </Routes>
    </>
  )
}

export default App
