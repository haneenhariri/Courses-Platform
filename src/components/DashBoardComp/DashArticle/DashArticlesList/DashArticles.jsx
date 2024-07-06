import CrudTable from "../../CrudTable/CrudTable"

export default function DashArticles() {
  return (
    <>
       <CrudTable 
              titleTable={'Articles'} 
              th1={'Title'} 
              th2={'Tag'} 
              th3={'Content'} 
              th4={'Date of Write'} 
              btnContent={'Article'}
              DataKey={'tableArticle'}
              AddURL={'add'}
      />
    </>
  )
}
