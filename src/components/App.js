import { useEffect, useState } from 'react';
import getDataFromApi from '../services/api';
import '../styles/App.scss';
import CharacterList from './CharacterList';

function App() {

  //VARIABLES ESTADO
const [characters, setCharacters] = useState([]);

  //USEEFFECT
  useEffect(() => {
    getDataFromApi().then((data) => setCharacters(data));
  }, []);

  //FUNCIONES HANDLER
  //FUNCIONES Y VARIABLES QUE AYUDEN A RENDERIZAR EL HTML
  //HTML EN EL RETURN

  return (
    <>
     <CharacterList characters={characters}/>
    </>

  );
}

export default App;
