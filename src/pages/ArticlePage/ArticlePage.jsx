import NavBar from '../../components/NavBar/NavBar'
import FOOTER from '../../components/Footer/Footer'
import './ArticalPage.css'
import ArticleHero from '../../components/ArticleHero/ArticleHero'
import Popular from '../../components/Popular/Popular'

export default function ArticlePage() {
  return (
    <>
       <NavBar />
       <ArticleHero/>
       <Popular/>
       <FOOTER />
    </>
  )
}
