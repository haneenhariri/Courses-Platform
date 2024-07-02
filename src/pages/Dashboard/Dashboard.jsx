import Sidebar from "../../components/DashBoardComp/Sidebar/Sidebar"
import { Outlet } from "react-router-dom"
import './Dashboard.css'

export default function Dashboard() {
  return (
    <div>
      <Sidebar />
      <Outlet />
    </div>
  );
}
