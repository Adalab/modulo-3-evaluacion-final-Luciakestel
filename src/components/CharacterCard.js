import { Link } from "react-router-dom";


const CharacterCard = (props) => {

    return (
        <li>
            <Link to={`/character/${props.character.id}`}>
            <article>
                <img src={props.character.image} alt={`Foto de ${props.character.name}`} />
                <h2>{props.character.name}</h2>
                <p>{props.character.species}</p>
            </article>
            </Link>
        </li>
    )

};

export default CharacterCard;