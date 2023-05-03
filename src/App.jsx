import './App.css'
import getRandom from "./utils/getRandom.js"
import phrases from "./assets/phrases.json"

import { useState } from 'react'

import Phrase from "./components/Phrase/Phrase.jsx"
import Author from "./components/Author/Author.jsx"
import Button from "./components/Button/Button.jsx"

function App() {
  let getRutaImg = () => `/fortune${getRandom(3)}.png`;
  let getRandomPhrases = () => phrases[getRandom(phrases.length - 1)];

  const [arrPhrases, setArrPhrases] = useState(getRandomPhrases());
  const [rutaImg , setRutaImg] = useState(getRutaImg());

  const changePhrse = () =>{
    let newPhase = getRandomPhrases();
    let newImg = getRutaImg();

    while (newPhase === arrPhrases){ 
      newPhase = getRandomPhrases();
    }
    while (newImg === rutaImg){ 
      newImg = getRutaImg();
    }
    setArrPhrases(newPhase);
    setRutaImg(newImg);
  }

  return (
    <>
      <div className="container_app" style={{backgroundImage:`url("${rutaImg}")`}}> 
        <div className="title_app">
            <h1>GALLETA DE LA FORTUNA</h1>
        </div>
        <div>
            <Phrase phrase={arrPhrases.phrase}/>
        </div>
        <div>
            <Button handlered={changePhrse}/>
        </div>
        <div>
            <p>Fuente: <Author author={arrPhrases.author}/></p>
        </div>
      </div>
    </>
  )
}
export default App