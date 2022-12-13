import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import '../styles/components/CharacterDetails.scss';
import PageNotFound from './PageNotFound';

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

if(characterFound === undefined){
    return <PageNotFound />
} else{
    return(
<>
    <article className="detailsArticle">
        <img src={characterFound.image} alt={`Foto de ${characterFound.name}`} className='detailsArticle__img' />
        <h2 className="detailsArticle__title">{characterFound.name}</h2>
        <ul className="detailsArticle__list">
            <li className="detailsArticle__list_element">{`Specie: ${characterFound.species} `}{renderSpecie()}</li>
            <li className="detailsArticle__list_element">{`Gender: ${characterFound.gender}`}</li>
            <li className="detailsArticle__list_element">{`Status: ${characterFound.status}`}{renderStatus()}</li>
            <li className="detailsArticle__list_element">{`Origin: ${characterFound.origin}`}</li>
            <li className="detailsArticle__list_element">{`Number of episodes: ${characterFound.episode}`}</li>

        </ul>
        <Link className="detailsArticle__link" to='/'>Return</Link>
    </article>
    
    </>
    )
}

};

export default CharacterDetails;