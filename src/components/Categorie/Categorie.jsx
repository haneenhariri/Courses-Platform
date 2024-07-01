import "./Categorie.css"
import {text_ma} from '../../const/data/CategorieData'
import { Link } from "react-router-dom";
export default function Categorie() {

    return (
    <section className="categorie-mj">
        {Object.entries(text_ma).map(([id, text_ma]) => (
            <div className="card-mj" key={id}>
                <img className="img-mj" src={text_ma.imageUrl} alt={text_ma.title} />
                <div className="ddd-mj">
                    <h2 className="h3-mj"><Link to={'/article'} className="h3-mj">{text_ma.title}</Link></h2>
                    <p id="p1-mj">{text_ma.job}</p>
                    <p id="p2-mj">{text_ma.description}</p>
                    <div className="mj-span">
                        <p className="p-mj-c" ><img src="./image/BlogImg/blog icons/Icon clock.svg" alt="clock" id="clock" />{text_ma.read}</p>
                        <p className="p-mj-c">{text_ma.datee}</p>
                    </div>
                </div>
            </div>
        ))}
    </section>
    );
}