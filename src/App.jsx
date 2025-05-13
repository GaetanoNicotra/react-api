import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
  // definizione variabili di stato
  const [characters, setCharacters] = useState([]);
  const [charactersBonus, setCharactersBonus] = useState([]);

  // Sezione delle chiamate ajax
  const showActors = () => {
    axios.get('https://lanciweb.github.io/demo/api/actors/').then((response) => {
      setCharacters(response.data);
      console.log(response.data);
      console.log(characters);
    })
  };

  const showActresses = () => {
    axios.get('https://lanciweb.github.io/demo/api/actresses/').then((response) => {
      setCharactersBonus(response.data);
      console.log(response.data);
      console.log(charactersBonus)
    })
  };

  // sezione degli useEffect
  useEffect(() => {
    showActors()
  }, []);

  useEffect(() => {
    showActresses()
  }, []);

  return (
    <>
      <header><h1> Cast Fetching</h1></header>
      <div className="container">
        <div className="row g-3">
          {characters.map((character) => (
            <div key={`character-${character.id}`} className="card col-2 h-100 me-4">
              <img src={character.image} className="card-img-top" alt="..." />
              <div className="card-body ">
                <h5 className="card-title">{character.name}</h5>
                <hr />
                <p className="card-text"><strong>Biography</strong> <br />{character.biography}</p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <div><strong>Birth year</strong></div>
                  {character.birth_year}</li>
                <li className="list-group-item">
                  <div><strong>Nationality</strong></div>
                  {character.nationality}</li>
                <li className="list-group-item">
                  <div><strong>Awards</strong></div>
                  {character.awards}</li>

              </ul>
            </div>
          ))}
          {charactersBonus.map((characterB) => (
            <div key={`characterB-${characterB.id}`} className="card col-2 h-100 me-4">
              <img src={characterB.image} className="card-img-top" alt="..." />
              <div className="card-body ">
                <h5 className="card-title">{characterB.name}</h5>
                <hr />
                <p className="card-text"><strong>Biography</strong> <br />{characterB.biography}</p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <div><strong>Birth year</strong></div>
                  {characterB.birth_year}</li>
                <li className="list-group-item">
                  <div><strong>Nationality</strong></div>
                  {characterB.nationality}</li>
                <li className="list-group-item">
                  <div><strong>Awards</strong></div>
                  {characterB.awards}</li>

              </ul>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default App
