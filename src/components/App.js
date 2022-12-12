import { useEffect, useState } from 'react';
import { Route, Routes, matchPath, useLocation} from 'react-router-dom';
import getDataFromApi from '../services/api';
import '../styles/App.scss';
import CharacterDetails from './CharacterDetails';
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
// {
//   if (character.name.includes(filterByName)){
//     return
//   } else{
//     return <p>'No existe ningún personaje que se llame así'</p>;
//   }
// }
character.name.toLowerCase().includes(filterByName.toLowerCase()));

const findCharacter = (id) =>{
  return characters.find((character) => character.id === parseInt(id));
}


  //HTML EN EL RETURN
  return (
    <>
    <h1>Rick and Morty's Characters</h1>
    <Routes>
      <Route path='/' element={
        <>
        <Filters handleFilterName={handleFilterName} filterByName={filterByName}/>
     <CharacterList characters={charactersFiltered}/>
        </>
      }/>
      <Route path='/character/:id' element={ <CharacterDetails findCharacter={findCharacter} /> }/>
    </Routes>
    
      
    </>

  );
}

export default App;
