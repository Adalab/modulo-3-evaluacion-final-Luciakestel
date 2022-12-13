import CharacterCard from "./CharacterCard";
import '../styles/components/CharacterList.scss';

const CharacterList = ({ characters }) => {

    const characterElement = characters.map((character) => {
        return <CharacterCard key={character.id} character={character} />
})

    return (
        <section className="card">
            <ul className="card_list">
                {characterElement}
            </ul>
        </section>
    );
};

export default CharacterList;