import { useEffect, useState } from 'react';
import getDataFromApi from '../services/api';
import '../styles/App.scss';
import CharacterList from './CharacterList';
import Filters from './Filters';

function App() {

  //VARIABLES ESTADO
const [characters, setCharacters] = useState([]);
const [filterByName, setFilterByName] = useState('');

  //USEEFFECT
  useEffect(() => {
    getDataFromApi().then((data) => setCharacters(data));
  }, []);

  //FUNCIONES HANDLER

  const handleFilterName = (value) =>{
setFilterByName(value)
  };
  //FUNCIONES Y VARIABLES QUE AYUDEN A RENDERIZAR EL HTML

const charactersFiltered = characters.filter((character) =>
character.name.toLowerCase().includes(filterByName.toLowerCase()));

  //HTML EN EL RETURN

  return (
    <>
    <h1>Rick and Morty's Characters</h1>
      <Filters handleFilterName={handleFilterName} filterByName={filterByName}/>
     <CharacterList characters={charactersFiltered}/>
    </>

  );
}

export default App;
