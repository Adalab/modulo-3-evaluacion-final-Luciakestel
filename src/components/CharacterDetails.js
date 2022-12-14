import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import '../styles/components/CharacterDetails.scss';
import PageNotFound from './PageNotFound';
import { FcBusinessman, FcBusinesswoman } from 'react-icons/fc';
import { FaHeartbeat, FaRedditAlien, FaArrowLeft} from 'react-icons/fa';
import{ GiDeathSkull}from 'react-icons/gi';

const CharacterDetails = (props) =>{

const params = useParams();
const characterFound = props.findCharacter(params.id);


const renderSpecie = () =>{
    if(characterFound.species === 'Alien'){
        return <FaRedditAlien className="detailsArticle_alien"/>
    } else if (characterFound.species === 'Human' && characterFound.gender === 'Female'){
        return <FcBusinesswoman />
    } else if (characterFound.species === 'Human' && characterFound.gender === 'Male'){
        return <FcBusinessman />
}
};

const renderStatus = () =>{
    if(characterFound.status === 'Alive'){
        return <FaHeartbeat className="detailsArticle_alive"/>
    } else if (characterFound.status === 'Dead' ){
        return <GiDeathSkull />
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
            <li className="detailsArticle__list_element">Specie: <span> {characterFound.species} </span> {renderSpecie()}</li>
            <li className="detailsArticle__list_element">Gender: <span> {characterFound.gender} </span></li>
            <li className="detailsArticle__list_element">Status: <span>{characterFound.status} </span>{renderStatus()}</li>
            <li className="detailsArticle__list_element">Origin: <span>{characterFound.origin} </span></li>
            <li className="detailsArticle__list_element">Number of episodes: <span>{characterFound.episode} </span></li>

        </ul>
        <Link className="detailsArticle__link" to='/'><FaArrowLeft /> Return</Link>
    </article>
    
    </>
    )
}

};

export default CharacterDetails;