import "./Categorie.css"
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function Categorie() {
  const storedJsonTableArticle = JSON.parse(localStorage.getItem('tableArticle') || '{}');
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    if (Object.keys(storedJsonTableArticle).length > 0) {
      const itemsPerPage = 6;
      const entries = Object.entries(storedJsonTableArticle);
      const numPages = Math.ceil(entries.length / itemsPerPage);

      const chunkedArticles = [];
      for (let i = 0; i < numPages; i++) {
        chunkedArticles.push(entries.slice(i * itemsPerPage, (i + 1) * itemsPerPage));
      }

      setArticles(chunkedArticles);
    }
    else{
      Swal.fire({
        icon: "error",
        title: "OOPS...",
        text: "No Results Found!",
        confirmButtonColor: '#504DEE'
    })
    }
  }, []);

  return (
    <section className="HH-blog-section">
      <Swiper className="mySwiper">
        {articles.map((chunk, pageIndex) => (
          <SwiperSlide key={pageIndex}>
            <div className="categorie-mj">
              {chunk.map(([id, item]) => (
                <div className="card-mj" key={id}>
                  <img className="img-mj" src={item.imageUrl} alt={item.td2} />
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
        <img src="./image/BlogImg/blog icons/arrow left.svg" alt="" />
        <div className="HH-num">
          <span className="HH-one">1</span>
          <span>2</span>
          <span>3...</span>
          <span>10</span>
        </div>
        <img src="./image/BlogImg/blog icons/arrow right.svg" alt="" />
      </div>
    </section>
  );
}