import { useParams } from "react-router-dom"
import Show from "../../Show/Show"


export default function ShowStd() {

  const { id } = useParams()

  const storedJsonTableSay = JSON.parse(localStorage.getItem('tableSay'))

  var name
  var course 
  var content 

  const k = id.substring(3)

  if (storedJsonTableSay) {
    name = storedJsonTableSay[k].td1
    course = storedJsonTableSay[k].td2
    content = storedJsonTableSay[k].td3
  }

  return (
    <Show name={name} course={course} content={content} link={'/dash'}/>
  )
}
