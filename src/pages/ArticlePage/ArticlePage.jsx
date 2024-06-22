import CardArticle from '../../components/CardArticle/CardArticle'
import NavBar from '../../components/NavBar/NavBar'
import FOOTER from '../../components/Footer/Footer'
import ArticleM from '../../components/ArticleM/ArticleM'

import './ArticalPage.css'

export default function ArticlePage() {
  return (
    <>
      <NavBar />
      <ArticleM title={'Which styles are no longer relevant'}
        content1={'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Uae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.'}

      content2={'Sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.'}
      />     
      <CardArticle />
      <ArticleM title={'What style to follow and how to preserve your authenticity?'}
      
      content1={'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.'}

      content2={'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?'}
      />
      <FOOTER />
    </>
  )
}
