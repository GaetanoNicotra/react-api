import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {

  const [chracters, setCharacters] = useState([]);

  const showActors = () => {
    axios.get('https://lanciweb.github.io/demo/api/actors/').then((response) => { console.log(response); setCharacters(response.data.results); })
  }

  useEffect(() => {
    showActors()
  }, []);


  return (
    <>
      <h1>hello</h1>
    </>
  )
}

export default App
