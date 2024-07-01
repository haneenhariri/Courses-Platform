
import FOOTER from '../../components/Footer/Footer'
import Categorie from '../../components/Categorie/Categorie'
import './Blog.css'
import Navblog from '../../components/NavBlog/Navblog'
import CategorieNav from '../../components/CategoriesNav/CategorieNav'

export default function Blog() {
  return (
    <>
       <Navblog/>
       <CategorieNav/>
       <Categorie/>
       <FOOTER />
    </>
  )
}
