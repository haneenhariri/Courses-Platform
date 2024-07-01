import Sidebar from "../../components/DashBoardComp/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";

export default function Dashboard() {
  return (
    <div>
      <Sidebar/>
      <Outlet/>
    </div>
  )
}
