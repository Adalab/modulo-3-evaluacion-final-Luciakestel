const getDataFromApi = () => {
    return fetch('https://rickandmortyapi.com/api/character')
      .then((response) => response.json())
      .then((data) => {
        const characters = data.results.map((eachCharacter) => {
          const character = {
                id: eachCharacter.id,
                name: eachCharacter.name,
                species: eachCharacter.species,
                status: eachCharacter.status,
                gender: eachCharacter.gender,
                image: eachCharacter.image,
                origin: eachCharacter.origin.name,
                episode: eachCharacter.episode.length,
          };
          return character;
        });
        return characters;
      });
  };
  
  export default getDataFromApi;