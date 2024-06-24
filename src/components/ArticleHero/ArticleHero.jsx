import "./ArticleHero.css";

const ArticleHero = () => {
  return (
    <div className="BA-ArticleHero">
      <div className="BA-popular">
        <img className="Ellipse20" src="./image/ArticlePageImg/ArticleHero/Ellipse 20.png" alt="Ellipse" />
        <h1>Top popular styles in illustration 2022</h1>
        <div className="BA-titel">
          <p># Illustration</p>
          <div className="read">
            <img src="./image/BlogImg/blog icons/Icon clock.svg" alt="clock" />
            <p>7 min read</p>
          </div>
          <p className="March">March 18, 2022</p>
        </div>
      </div>

      <img
        className="Ellipse"
        src="./image/ArticlePageImg/ArticleHero/Ellipse.png"
        alt="Ellipse"
      />
    </div>
  );
};

export default ArticleHero;
