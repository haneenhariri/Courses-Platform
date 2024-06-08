import './App.css'
import MainPage from './pages/MainPage/MainPage'
import Courses from './pages/Courses/Courses'
import Blog from './pages/Blog/Blog'
import ArticlePage from './pages/ArticlePage/ArticlePage'
import './../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Route,Routes } from 'react-router-dom'

function App() {
  
  return (
    <>
      <Routes>
        <Route path='/Courses-Platform/' element={<MainPage />} />
        <Route path='/Courses-Platform/courses' element={<Courses />} />
        <Route path='/Courses-Platform/blog' element={<Blog/>} />
        <Route path='/Courses-Platform/article' element={<ArticlePage/>} />
      </Routes>
    </>
  )
}

export default App
