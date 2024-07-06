import "./Categorie.css"
import {TableArticle} from '../../const/data/CrudData'
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function Categorie() {
  const itemsPerPage = 6;
  const articleEntries = Object.entries(TableArticle);
  const numPages = Math.ceil(articleEntries.length / itemsPerPage); 
  const chunkedArticles = [];
  for (let i = 0; i < numPages; i++) {
    chunkedArticles.push(articleEntries.slice(i * itemsPerPage, (i + 1) * itemsPerPage));
  }
  return (
    <section>
      <Swiper className="mySwiper">
        {chunkedArticles.map((chunk, index) => (
          <SwiperSlide key={index}>
            <div className="categorie-mj">
              {chunk.map(([id, item]) => (
                <div className="card-mj" key={id}>
                  <img className="img-mj" src={item.imageUrl} alt={item.td2} />
                  <div className="ddd-mj">
                    <h2 className="h3-mj"><Link to={'/article'} className="h3-mj">{item.td1}</Link></h2>
                    <p id="p1-mj">{item.td2}</p>
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
    </section>
  );
}