import Form from "../../Form/Form";


export default function AddArticle() {
  return (
    <Form 
        title={'Add New Article'}
        label1={'Title '}
        label2={'Tag'}
        label3={'Content'}
        label4={'date'}
        TdData={'tableArticle'}
        func={'add'}
    />
  )
}
