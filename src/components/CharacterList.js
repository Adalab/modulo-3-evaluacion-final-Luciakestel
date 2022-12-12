import CharacterCard from "./CharacterCard";


const CharacterList = ({ characters }) => {

    const characterElement = characters.map((character) => {
        return <CharacterCard key={character.id} character={character} />
})

    return (
        <section>
            <ul>
                {characterElement}
            </ul>
        </section>
    );
};

export default CharacterList;