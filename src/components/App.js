import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import getDataFromApi from '../services/api';
import '../styles/App.scss';
import CharacterDetails from './CharacterDetails';
import CharacterList from './CharacterList';
import Filters from './Filters';
import Header from './Header';

function App() {

  //VARIABLES ESTADO
const [characters, setCharacters] = useState([]);
const [filterByName, setFilterByName] = useState('');
const [filterBySpecies, setFilterBySpecies] = useState('all');

  //USEEFFECT
  useEffect(() => {
    getDataFromApi().then((data) => setCharacters(data));
  }, []);

  //FUNCIONES HANDLER

  const handleFilterName = (value) =>{
setFilterByName(value)
  };

  const handleFilterSpecies = (value) =>{
    setFilterBySpecies(value)
      };
  //FUNCIONES Y VARIABLES QUE AYUDEN A RENDERIZAR EL HTML

const charactersFiltered = characters.filter((character) =>
// {
//   if (character.name.toLowerCase().includes(filterByName.toLowerCase())){
//     return true;
//   } else{
//     return <p>'No existe ningún personaje que se llame así'</p>;
//   }
// }
character.name.toLowerCase().includes(filterByName.toLowerCase()))
.filter((character) => {
  if(filterBySpecies === 'all'){
    return true;
  } else{
    return character.species === filterBySpecies;
  }
})

const findCharacter = (id) =>{
  return characters.find((character) => character.id === parseInt(id));
}


  //HTML EN EL RETURN
  return (
    <div className='App'>
    <Header />
    <Routes>
      <Route path='/' element={
        <>
        <Filters handleFilterName={handleFilterName} filterByName={filterByName} handleFilterSpecies={handleFilterSpecies} filterBySpecies={filterBySpecies}/>
     <CharacterList characters={charactersFiltered}/>
        </>
      }/>
      <Route path='/character/:id' element={ <CharacterDetails findCharacter={findCharacter} /> }/>
    </Routes>
    
      
    </div>

  );
}

export default App;
