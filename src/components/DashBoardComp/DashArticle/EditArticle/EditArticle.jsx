import Form from '../../Form/Form'
import './EditArticle.css'

export default function EditArticle() {
  return (
    <Form 
      title={'Edit Article'}
      label1={'Title '}
      label2={'Tag'}
      label3={'Content'}
      label4={'date'}
      input1={'10 updated Figma features in 2022'}
      input2={'Illustration'}
      input3={'Ugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem'}
      input4={'08-Dec, 2021'}
    />
  )
}
