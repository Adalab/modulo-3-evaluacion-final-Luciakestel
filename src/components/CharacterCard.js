

const CharacterCard = (props) => {

    return (
        <li>
            <article>
                <img src={props.character.image} alt={`Foto de ${props.character.name}`} />
                <h2>{props.character.name}</h2>
                <p>{props.character.species}</p>
            </article>
        </li>
    )

};

export default CharacterCard;