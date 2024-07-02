import { Outlet } from "react-router-dom";
import CrudTable from "../../CrudTable/CrudTable";
import { TableArticle } from "../../../../const/data/CrudData";


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
                Data={TableArticle}
                AddURL={'add'}
      />
       <Outlet/>
    </>
  )
}
