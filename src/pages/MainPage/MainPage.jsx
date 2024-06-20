import './MainPage.css'   
import Hero from '../../components/Hero/Hero'
import DiscoverLearn from '../../components/DiscoverLearn/DiscoverLearn'
import WhatLearn from '../../components/WhatLearn/WhatLearn'   
import NavBar from "../../components/NavBar/NavBar";
import FOOTER from '../../components/Footer/Footer'
import ChooseCourse from "../../components/ChooseCourse/ChooseCourse";
import StudentSay from "../../components/StudentSay/StudentSay";
import FAQ from '../../components/FAQ/FAQ';
export default function MainPage() {
  return (
    <>
      <NavBar />
      <Hero h1={"Explore thousands of hands-on creative classes."} p={'Start learning for '} span={'free'} button={'Choose a course'} discount={'50%'} days={'24 Days'} time={'17:44:16'} img={"./image/MainPageImg/HeroImg/Hero_1.png"} month={''} profession={''} courses={true} classImg1={'OE_main_image1'} classImg2={'OE_main_image2'} classVector={'OE_main_vector'}/>
      <WhatLearn />
      <DiscoverLearn />
      <ChooseCourse/>
      <StudentSay/>
      <FAQ/>
      <FOOTER />
    </>
  );
}
