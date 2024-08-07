import "./Popular.css";
const Popular = () => {
  return (
    <div className="BA-Article">
      <div className="styles">
        <p className="BA-p">
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis occaecati cupiditate non provident, similique sunt in culpa
          qui officia deserunt mollitia animi, id est laborum et dolorum fuga.{" "}
        </p>

        <p className="BA-p">
          Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
          suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis
          autem vel eum iure reprehenderit qui in ea voluptate velit esse quam
          nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
          voluptas nulla pariatur?
        </p>
        <div className=" BA-Popular">
          <div className="image">
            <img
              src="./image/ArticlePageImg/popular/image 1.png"
              alt="avatar"
            />
            <img
              src="./image/ArticlePageImg/popular/image 2.png"
              alt="avatar"
            />
          </div>

          <div className="BA-Popular1">
            <h1>Popular styles in 2022</h1>
            <p>
              Explore new skills, deepen existing passions, and get lost in
              creativity. What you find just might surprise and inspire you.
              Nostrum exercitationem ullam corporis suscipit. ui dolorem ipsum
              quia dolor sit amet, consectetur, adipisci velit
            </p>
          </div>
        </div>

       
      </div>
    </div>
  );
};

export default Popular;
