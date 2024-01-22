// CSS
import './App.css';


// REACT
import { useCallback, useEffect, useState} from "react";

// DATA
import { wordsList } from './data/Words';


// COMPONENTES
import StartScreen from './Componentes/StartScreen';
import Game from './Componentes/Game';
import GameOver from './Componentes/GameOver';

const stages = [
  {id: 1, name: "start"},
  {id: 2, name: "game"},
  {id: 3, name: "end"}
]

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name)
  const [words] = useState(wordsList)

  const startGame = () => {
    setGameStage(stages[1].name)
  }

  const verifyLetter = () => {
    setGameStage(stages[2].name)
  }

  const restart = () => {
    setGameStage(stages[0].name)
  }

  return (
    <div className="App">
      {/*Renderização condicional, se o 'gameStage' for igual a 'start' ele exibe o componente <StartScreen/>*/}
        {gameStage === "start" && <StartScreen startGame={startGame}/>} 
        {gameStage === "game" && <Game verifyLetter={verifyLetter}/>} 
        {gameStage === "end" && <GameOver restart={restart}/>} 
    </div>
  );
}

export default App;
