import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import '../styles/components/CharacterDetails.scss';
import PageNotFound from './PageNotFound';
import { FcBusinessman, FcBusinesswoman, FcNoIdea } from 'react-icons/fc';
import { FaHeartbeat, FaRedditAlien, FaArrowLeft } from 'react-icons/fa';
import { GiDeathSkull } from 'react-icons/gi';
import PropTypes from 'prop-types';

const CharacterDetails = (props) => {

    const params = useParams();
    const characterFound = props.findCharacter(params.id);


    const renderSpecie = () => {
        if (characterFound.species === 'Alien') {
            return <FaRedditAlien className="detailsArticle_alien" />
        } else if (characterFound.species === 'Human' && characterFound.gender === 'Female') {
            return <FcBusinesswoman />
        } else if (characterFound.species === 'Human' && characterFound.gender === 'Male') {
            return <FcBusinessman />
        }
    };

    const renderStatus = () => {
        if (characterFound.status === 'Alive') {
            return <FaHeartbeat className="detailsArticle_alive" />
        } else if (characterFound.status === 'Dead') {
            return <GiDeathSkull />
        } else if (characterFound.status === 'unknown') {
            return <FcNoIdea />
        }
    };

    if (characterFound === undefined) {
        return <PageNotFound />
    } else {
        return (
            <>
                <article className="detailsArticle">
                    <img src={characterFound.image} alt={`Foto de ${characterFound.name}`} className='detailsArticle__img' />
                    <h2 className="detailsArticle__title">{characterFound.name}</h2>
                    <ul className="detailsArticle__list">
                        <li className="detailsArticle__list_element">Specie:  {characterFound.species}  {renderSpecie()}</li>
                        <li className="detailsArticle__list_element">Gender:  {characterFound.gender} </li>
                        <li className="detailsArticle__list_element">Status:  {characterFound.status}  {renderStatus()}</li>
                        <li className="detailsArticle__list_element">Origin:  {characterFound.origin} </li>
                        <li className="detailsArticle__list_element">Number of episodes: <span>{characterFound.episode} </span></li>

                    </ul>
                    <Link className="detailsArticle__link" to='/'><FaArrowLeft /> Return</Link>
                </article>

            </>
        )
    }

};

CharacterDetails.protoType = {
    photo: PropTypes.string,
    name: PropTypes.string,
    status: PropTypes.string,
    species: PropTypes.string,
    origin: PropTypes.string,
    episodes: PropTypes.string,
}
export default CharacterDetails;