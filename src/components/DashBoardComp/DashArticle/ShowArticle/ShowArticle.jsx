import { useParams } from "react-router-dom"
import Show from "../../Show/Show"


export default function ShowArticle() {
  const { id } = useParams()

  const storedJsonTableArticle = JSON.parse(localStorage.getItem('tableArticle'))

  var name
  var course 
  var content 

  const k = id.substring(3)

  if (storedJsonTableArticle) {
    name = storedJsonTableArticle[k].td1
    course = storedJsonTableArticle[k].td2
    content = storedJsonTableArticle[k].td3
  }

  return (
    <Show name={name} course={course} content={content} link={'/dash/articlelist'}/>
  )
}
