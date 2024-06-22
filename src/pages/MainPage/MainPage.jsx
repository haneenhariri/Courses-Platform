import NavBar from "../../components/NavBar/NavBar";
import FOOTER from '../../components/Footer/Footer'
import "./MainPage.css";
import WHatDiscover from "../../components/WhatDiscover/WhatDiscover";
import AMTrain from "../../components/Training/Training";


export default function MainPage() {
  return (
    <>
      <NavBar />
      <WHatDiscover />
      <AMTrain />
      <FOOTER />
    </>
  );
}
