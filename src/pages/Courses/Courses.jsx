import UiDesign from "../../components/UiDesign/UiDesign";
import ProjStd from '../../components/ProjStd/ProjStd'
import Hero from '../../components/Hero/Hero'
import { BtnsCoursesData } from '../../const/data/HeroData'
import NavBar from '../../components/NavBar/NavBar'
import FOOTER from '../../components/Footer/Footer'
import Price from '../../components/Price/Price'
import TrainProgram from './../../components/TrainProgram/TrainProgram'
import './Courses.css'
import Teachers from "../../components/Teachers/Teachers";
export default function Courses() {
  return (
    <>
      <NavBar />
      <Hero top_h6 ={'6 months'}
            top_p ={'profession:'}
            title = {'UI/UX designer'} 
            mb_p = {'OE-course-p'}
            p = {`You will learn how to create a brand identity on the web and for printing. 
                  Learn how to work in Illustrator, Photoshop, InDesign and Figma.
                  Add posters, logos, merch design and other strong projects to your portfolio. 
                  Start a career in the studio or freelance.`} 
            btn= {'Started'}
            num1 = {'25%'}
            num2 = {'17'}
            img_vector = {'OE-img-vector'}
            imgURL = {'./image/CoursesImg/HeroCourses/employment-female.png'}
            BtnsData = {BtnsCoursesData}
            show = {'OE-show'}
      />
       <UiDesign />
      <ProjStd />
      <TrainProgram/>
      <Teachers />
      <Price/>
      <FOOTER />
    </>
  );
}


