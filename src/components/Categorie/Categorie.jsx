import "./Categorie.css"
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Swal from 'sweetalert2';
import { Navigation } from 'swiper/modules'
import 'swiper/css/navigation';

export default function Categorie({ selectedCategory }) {
  const storedJsonTableArticle = JSON.parse(localStorage.getItem('tableArticle') || '{}');
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    if (Object.keys(storedJsonTableArticle).length > 0) {
      const filteredArticles = selectedCategory === 'All'
        ? Object.entries(storedJsonTableArticle)
        : Object.entries(storedJsonTableArticle).filter(([id, item]) => item.td2 === selectedCategory);

      const itemsPerPage = 6;
      const numPages = Math.ceil(filteredArticles.length / itemsPerPage);

      const chunkedArticles = [];
      for (let i = 0; i < numPages; i++) {
        chunkedArticles.push(filteredArticles.slice(i * itemsPerPage, (i + 1) * itemsPerPage));
      }

      setArticles(chunkedArticles);
    } else {
      Swal.fire({
        icon: "error",
        title: "OOPS...",
        text: "No Results Found!",
        confirmButtonColor: '#504DEE'
      });
    }
  }, [selectedCategory]);

  return (
    <section className="HH-blog-section">
      <Swiper className="mySwiper"
        modules={[Navigation]}
        navigation={{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        }}>
        { articles.map((chunk, pageIndex) => (
          <SwiperSlide key={pageIndex}>
            <div className="categorie-mj">
              {chunk.map(([id, item]) => (
                <div className="card-mj" key={id}>
                  <img className="img-mj" src={item.imageUrl || './image/BlogImg/blog images/article 6.png'} alt={item.td2} />
                  <div className="ddd-mj">
                    <h2 className="h3-mj"><Link to={'/article'} className="h3-mj">{item.td1}</Link></h2>
                    <p id="p1-mj">#{item.td2}</p>
                    <p id="p2-mj">{item.td3}</p>
                    <div className="mj-span">
                      <p className="p-mj-c"><img src="./image/BlogImg/blog icons/Icon clock.svg" alt="clock" id="clock" />{item.read}</p>
                      <p className="p-mj-c">{item.td4}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="HH-arrow">
        <img className=" swiper-button-prev " src="./image/BlogImg/blog icons/arrow left.svg" alt="arrow left" />
        <div className="HH-num">
          <span className="HH-one">1</span>
          <span>2</span>
          <span>3...</span>
          <span>10</span>
        </div>
        <img className="swiper-button-next" src="./image/BlogImg/blog icons/arrow right.svg" alt="arrow right" />
      </div>
    </section>
  );
}
