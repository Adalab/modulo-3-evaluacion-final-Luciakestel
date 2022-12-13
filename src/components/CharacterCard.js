import { Link } from "react-router-dom";
import '../styles/components/CharacterCard.scss';


const CharacterCard = (props) => {

    return (
        <li>
            <Link className="link" to={`/character/${props.character.id}`}>
            <article className="article">
                <img src={props.character.image} alt={`Foto de ${props.character.name}`} className='article_img'/>
                <div className="article_container">
                    <h2 className="article_container_title">{props.character.name}</h2>
                    <p className="article_container_text">{props.character.species}</p>
                </div>
            </article>
            </Link>
        </li>
    )

};

export default CharacterCard;