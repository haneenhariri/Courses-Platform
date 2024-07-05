import { useParams } from "react-router-dom"
import Form from "../../Form/Form"
export default function EditStd() {

  const { id } = useParams()

  const storedJsonTableArticle = JSON.parse(localStorage.getItem('tableArticle'))
  
  var input_1 
  var input_2 
  var input_3 
  var input_4 

  const k = id.substring(3)

  if (storedJsonTableArticle) {
    input_1 = storedJsonTableArticle[k].td1
    input_2 = storedJsonTableArticle[k].td2
    input_3 = storedJsonTableArticle[k].td3
    input_4 = storedJsonTableArticle[k].td4
  }

  
  
  return (
    <Form 
      title={'Edit Student'}
      label1={'Student name'}
      label2={'Course name'}
      label3={'What he say'}
      label4={'date'}
      input1={input_1}
      input2={input_2}
      input3={input_3}
      input4={input_4}
      TdData={'tableArticle'}
      i={k}
      func={'edit'}
    />
  )
}
