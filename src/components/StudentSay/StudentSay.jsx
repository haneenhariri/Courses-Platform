import { useEffect, useState } from 'react';
import './StudentSay.css'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Swal from "sweetalert2";

export default function StudentSay() {
  const storedJsonTableSay = JSON.parse(localStorage.getItem('tableSay') || '{}');
  const [stdSay, setStdSay] = useState([]);

  useEffect(() => {
    if (Object.keys(storedJsonTableSay).length > 0) {
      const itemsPerPage = 2;
      const entries = Object.entries(storedJsonTableSay);
      const numPages = Math.ceil(entries.length / itemsPerPage);

      const chunkedStd = [];
      for (let i = 0; i < numPages; i++) {
        chunkedStd.push(entries.slice(i * itemsPerPage, (i + 1) * itemsPerPage));
      }

      setStdSay(chunkedStd);
    } else {
      Swal.fire({
        icon: "error",
        title: "OOPS...",
        text: "No Results Found!",
        confirmButtonColor: '#504DEE'
      });
    }
  }, [storedJsonTableSay]);

  return (
    <section className='HH-Std'>
      <h2 className='HH-h2'>What our students have to say</h2>
      <div className='HH-icon'>
        <img className='HH-icon-arow' src="./image/MainPageImg/StudentSayImg/Icon_arrow_left.svg" alt="arrow left" />
        <img className='HH-icon-arow' src="./image/MainPageImg/StudentSayImg/Icon_arow_right.svg" alt="arrow right" />
      </div>
      <Swiper >
        {stdSay.map((chunk, pageIndex) => (
          <SwiperSlide className='HH-cards' key={`slide-${pageIndex}`}>
            {chunk.map(([id, item]) => (
              <div className='HH-card' key={id}>
                <div className='HH-cardInfo'>
                  <img className='HH-cardImg' src="./image/MainPageImg/StudentSayImg/user_icon_left.svg" alt="user" />
                  <div>
                    <h3 className='HH-cardTitle'>{item.td1}</h3>
                    <p className='HH-CardP'>{item.td2}</p>
                  </div>
                </div>
                <div className='HH-CardText'>
                  <p>{item.td3}</p>
                </div>
              </div>
            ))}
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}
