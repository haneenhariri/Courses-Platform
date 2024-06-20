import ProjStd from '../../components/ProjStd/ProjStd'
import Hero from '../../components/Hero/Hero'
import NavBar from '../../components/NavBar/NavBar'
import FOOTER from '../../components/Footer/Footer'
import Price from '../../components/Price/Price'

import './Courses.css'
export default function Courses() {
  return (
    <>
      <ProjStd />
      <Hero h1={"UI/UX designer "} p={'You will learn how to create a brand identity on the web and for printing. Learn how to work in Illustrator, Photoshop, InDesign and Figma. Add posters, logos, merch design and other strong projects to your portfolio. Start a career in the studio or freelance.'} span={''} button={'Started'} discount={'25%'} days={'17 Days'} time={'17:44:16'} img={"./image/CoursesImg/HeroCourses/employment-female.png"} month={'6 months'} profession={'profession'}
      courses={false} classImg1={'OE_courses_image1'} classImg2={'OE_courses_image2'} classVector={'OE_courses_vector'}
      />
      <NavBar />
      <Price/>
      <FOOTER />
    </>
  )
}


