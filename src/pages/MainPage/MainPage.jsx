import NavBar from "../../components/NavBar/NavBar";
import FOOTER from '../../components/Footer/Footer'
import "./MainPage.css";
import ChooseCourse from "../../components/ChooseCourse/ChooseCourse";
import Acordeon from './../../components/Acordeon/Acordeon'
import StudentSay from "../../components/StudentSay/StudentSay";
export default function MainPage() {
  return (
    <>
      <NavBar />
{/*       <ChooseCourse/> */}
      <StudentSay/>
      <FOOTER />
    </>
  );
}
