import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import '../styles/components/CharacterDetails.scss';

const CharacterDetails = (props) =>{

const params = useParams();
const characterFound = props.findCharacter(params.id);


const renderSpecie = () =>{
    if(characterFound.species === 'alien'){
        return <i className="fa-solid fa-alien-8bit icon"></i>
    } else if (characterFound.species === 'human' && characterFound.gender === 'female'){
        return <i className="fa-solid fa-user-vneck-hair-long"></i>
    } else if (characterFound.species === 'human' && characterFound.gender === 'male'){
        return <i className="fa-solid fa-user-vneck-hair"></i>
}
};

const renderStatus = () =>{
    if(characterFound.status === 'alive'){
        return <i className="fa-regular fa-wave-pulse"></i>
    } else if (characterFound.status === 'dead' ){
        return <i className="fa-solid fa-skull-crossbones"></i>
    } 
};


return(
    <>
    <article className="article">
        <img src={characterFound.image} alt={`Foto de ${characterFound.name}`} className='article__img' />
        <h2 className="article__title">{characterFound.name}</h2>
        <ul className="article__list">
            <li className="article__list_element">{`Specie: ${characterFound.species} `}{renderSpecie()}</li>
            <li className="article__list_element">{`Gender: ${characterFound.gender}`}</li>
            <li className="article__list_element">{`Status: ${characterFound.status}`}</li>
            <li className="article__list_element">{`Origin: ${characterFound.origin}`}</li>

        </ul>
    </article>
    <Link className="link" to='/'>Return</Link>
    </>
)
};

export default CharacterDetails;