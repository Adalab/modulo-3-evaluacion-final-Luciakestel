import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";


const CharacterDetails = (props) =>{

const params = useParams();
const characterFound = props.findCharacter(params.id);


const renderSpecie = () =>{
    if(characterFound.species === 'alien'){
        return <i class="fa-solid fa-alien-8bit"></i>
    } else if (characterFound.species === 'human' && characterFound.gender === 'female'){
        return <i class="fa-solid fa-user-vneck-hair-long"></i>
    } else if (characterFound.species === 'human' && characterFound.gender === 'male'){
        return <i class="fa-solid fa-user-vneck-hair"></i>
}
};

const renderStatus = () =>{
    if(characterFound.status === 'alive'){
        return <i class="fa-regular fa-wave-pulse"></i>
    } else if (characterFound.status === 'dead' ){
        return <i class="fa-solid fa-skull-crossbones"></i>
    } 
};


return(
    <>
    <article>
        <img src={characterFound.image} alt={`Foto de ${characterFound.name}`} />
        <h2>{characterFound.name}</h2>
        <ul>
            <li>{`Specie: ${characterFound.species}`} {renderSpecie()}</li>
            <li>{`Gender: ${characterFound.gender}`}</li>
            <li>{`Status: ${characterFound.status}`}</li>
            <li>{`Origin: ${characterFound.origin}`}</li>

        </ul>
    </article>
    <Link to='/'>Return</Link>
    </>
)
};

export default CharacterDetails;