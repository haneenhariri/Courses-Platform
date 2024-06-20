import DiscoverLearn from '../../components/DiscoverLearn/DiscoverLearn'
import WhatLearn from '../../components/WhatLearn/WhatLearn'
import Hero from '../../components/Hero/Hero'
import NavBar from "../../components/NavBar/NavBar";
import FOOTER from '../../components/Footer/Footer'
import './MainPage.css'
export default function MainPage() {
  return (
    <>
      <WhatLearn />
      <DiscoverLearn />
      <Hero h1={"Explore thousands of hands-on creative classes."} p={'Start learning for '} span={'free'} button={'Choose a course'} discount={'50%'} days={'24 Days'} time={'17:44:16'} img={"./image/MainPageImg/HeroImg/Hero_1.png"} month={''} profession={''} courses={true} classImg1={'OE_main_image1'} classImg2={'OE_main_image2'} classVector={'OE_main_vector'}/>
      <NavBar />
    </>
  );
}
