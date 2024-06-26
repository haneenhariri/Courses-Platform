import NavBar from "../../components/NavBar/NavBar";
import FOOTER from '../../components/Footer/Footer'
import "./MainPage.css";
import WHatDiscover from "../../components/WhatDiscover/WhatDiscover";
import AMTrain from "../../components/Training/Training";
import Hero from '../../components/Hero/Hero'
import { BtnsMainData } from '../../const/data/HeroData'
import DiscoverLearn from '../../components/DiscoverLearn/DiscoverLearn'
import WhatLearn from '../../components/WhatLearn/WhatLearn'   
import ChooseCourse from "../../components/ChooseCourse/ChooseCourse";
import StudentSay from "../../components/StudentSay/StudentSay";
import FAQ from '../../components/FAQ/FAQ';
import "./MainPage.css";  
import GrayCard from "../../components/GrayCard/GrayCard";
import StdProgram from "../../components/StdProgram/StdProgram";


export default function MainPage() {
  return (
    <>
      <NavBar />
      <Hero title = {'Explore thousands of hands-on creative classes.'} 
            p = {'Start learning for'} 
            span1 = {'free'}
            btn= {'Choose a cource'}
            num1 = {'50%'}
            num2 = {'24 Days'}
            imgURL = {'./image/MainPageImg/HeroImg/Hero_1.png'}
            BtnsData = {BtnsMainData}
      />
      <WhatLearn />
      <DiscoverLearn />
      <WHatDiscover />
      <AMTrain />
      <ChooseCourse/>
      <StudentSay/>
      <GrayCard />
      <StdProgram/>
      <FAQ/>
      <FOOTER />
    </>
  );
}