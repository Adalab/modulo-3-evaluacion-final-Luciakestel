import CharacterCard from "./CharacterCard";
import '../styles/components/CharacterList.scss';

const CharacterList = ({ characters }) => {
    const nameList = characters;
    nameList.sort((a, b) => (a.name > b.name ? 1 : a.name < b.name ? -1 : 0));
    const characterElement = characters.map((character) => {
        return <CharacterCard key={character.id} character={character} />
})
if(characters.length === 0){
    return <p className="error">Character not found, sorry.</p>;
} else{
    return (
        <section className="card">
        <ul className="card_list">
            {characterElement}
        </ul>
    </section>
    )
}
    // return (
    //     <section className="card">
    //         <ul className="card_list">
    //             {characterElement}
    //         </ul>
    //     </section>
    // );
};

export default CharacterList;