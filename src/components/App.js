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
const [filterByStatus, setFilterByStatus] = useState([]);

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

  const handleFilterStatus = (value) =>{
    if(filterByStatus.includes(value)){
      const status = filterByStatus.indexOf(value);
      filterByStatus.splice(status, 1);
      setFilterByStatus([...filterByStatus]);
    } else{
      setFilterByStatus([...filterByStatus, value]);
    }
       };

const handleReset = () =>{
  setFilterByName('');
  setFilterBySpecies('all');
  setFilterByStatus([]);
}
  //FUNCIONES Y VARIABLES QUE AYUDEN A RENDERIZAR EL HTML

const charactersFiltered = characters.filter((character) =>character.name.toLowerCase().includes(filterByName.toLowerCase()))
.filter((character) => {
  if(filterBySpecies === 'all'){
    return true;
  } else{
    return character.species === filterBySpecies;
  }
  
}).filter((character)=>{
  if(filterByStatus.length === 0){
    return true;
  } else{
    return filterByStatus.includes(character.status);
  }
})


const findCharacter = (id) =>{
  return characters.find((character) => character.id === parseInt(id));
}


  //HTML EN EL RETURN
  return (
    <div className='App'>
    
    <Routes>
      <Route path='/' element={
        <>
        <Header />
        <Filters handleFilterName={handleFilterName} filterByName={filterByName} handleFilterSpecies={handleFilterSpecies} filterBySpecies={filterBySpecies} handleFilterStatus={handleFilterStatus} filterByStatus={filterByStatus} handleReset={handleReset}/>
     <CharacterList characters={charactersFiltered}/>
        </>
      }/>
      <Route path='/character/:id' element={ <CharacterDetails findCharacter={findCharacter} /> }/>
    </Routes>
    
      
    </div>

  );
}

export default App;
