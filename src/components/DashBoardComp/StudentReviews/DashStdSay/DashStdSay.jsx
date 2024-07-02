import CrudTable from "../../CrudTable/CrudTable";
import { TableSay } from "../../../../const/data/CrudData"


export default function DashStdSay() {
  return (
    <div>
    <CrudTable 
              titleTable={'Students say List'} 
              th1={'Name'} 
              th2={'Course'} 
              th3={'content'} 
              th4={'Date of say'}
              btnContent={'STUDENT Say'}
              Data={TableSay}
              AddURL={'dashstdsay/add'}
    />

    </div>
  )
}
