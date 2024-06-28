import CrudTable from "../../components/DashBoardComp/CrudTable/CrudTable";


export default function Dashboard() {
  return (
    <div>
      <CrudTable titleTable={'Articles'} th1={'Title'} th2={'Tag'} th3={'Content'} th4={'Date of Write'} />
      {/* <CrudTable titleTable={'Students say List'} th1={'Name'} th2={'Course'} th3={'content'} th4={'Date of say'}/> */}
    </div>
  )
}
