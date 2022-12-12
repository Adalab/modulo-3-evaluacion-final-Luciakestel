import { useEffect } from 'react';
import { useState } from 'react';
import getDataFromApi from '../services/api';
import '../styles/App.scss';

function App() {

  //VARIABLES ESTADO
const [characters, setCharacters] = useState({});

  //USEEFFECT
  useEffect(() => {
    getDataFromApi().then((data) => setCharacters(data));
  }, []);

  //FUNCIONES HANDLER
  //FUNCIONES Y VARIABLES QUE AYUDEN A RENDERIZAR EL HTML
  //HTML EN EL RETURN

  return (
    <div className="App">
     Hola mundo
    </div>

  );
}

export default App;
