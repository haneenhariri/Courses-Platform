
import FOOTER from '../../components/Footer/Footer'
import Categorie from '../../components/Categorie/Categorie'
import './Blog.css'
import Navblog from '../../components/NavBlog/Navblog'
import CategorieNav from '../../components/CategoriesNav/CategorieNav'
import { useState } from 'react'

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  return (
    <>
    
       <Navblog/>
       <CategorieNav selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}/>
       <Categorie selectedCategory={selectedCategory}/>
       <FOOTER />
    </>
  )
}
