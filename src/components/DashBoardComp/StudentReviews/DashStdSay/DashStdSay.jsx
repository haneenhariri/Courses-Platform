import CrudTable from "../../CrudTable/CrudTable"


export default function DashStdSay() {
  return (
    <>
    <CrudTable 
              titleTable={'Students say List'} 
              th1={'Name'} 
              th2={'Course'} 
              th3={'content'} 
              th4={'Date of say'}
              btnContent={'STUDENT Say'}
              DataKey={'tableSay'}
              AddURL={'dashstdsay/add'}
    />

    </>
  )
}
