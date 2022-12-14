import CharacterCard from "./CharacterCard";
import '../styles/components/CharacterList.scss';
import { CgDanger } from 'react-icons/cg';
import PropTypes from 'prop-types';

const CharacterList = ({ characters }) => {
    const nameList = characters;
    nameList.sort((a, b) => (a.name > b.name ? 1 : a.name < b.name ? -1 : 0));
    const characterElement = characters.map((character) => {
        return <CharacterCard key={character.id} character={character} />
    })
    if (characters.length === 0) {
        return <p className="error"><CgDanger className='error_alert' /> Sorry, character not found.</p>;
    } else {
        return (
            <section className="card">
                <ul className="card_list">
                    {characterElement}
                </ul>
            </section>
        )
    }
};
CharacterList.propType = {
    characters: PropTypes.array,
    id: PropTypes.number,
};

export default CharacterList;