import NavBar from "../../components/NavBar/NavBar";
import FOOTER from '../../components/Footer/Footer'
import "./MainPage.css";
import WHatDiscover from "../../components/WhatDiscover/WhatDiscover";
import AMTrain from "../../components/Training/Training";
import AMwhatLearn from "../../components/WhatLearnCourse/WhatLearnCourse";
import Programm from "../../components/Programms/Programms";

export default function MainPage() {
  return (
    <>
      <NavBar />
      <WHatDiscover />
      <AMTrain />
      <AMwhatLearn />
      <Programm />
      <FOOTER />
    </>
  );
}
