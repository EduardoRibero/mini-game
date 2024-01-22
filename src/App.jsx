// CSS
import './App.css';


// REACT
import { useCallback, useEffect, useState} from "react";

// DATA
import { wordsList } from './data/Words';


// COMPONENTES
import StartScreen from './Componentes/StartScreen';

const stages = [
  {id: 1, name: "start"},
  {id: 2, name: "game"},
  {id: 3, name: "end"}
]

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name)
  const [words] = useState(wordsList)

  return (
    <div className="App">
      {/*Renderização condicional, se o 'gameStage' for igual a 'start' ele exibe o componente <StartScreen/>*/}
        {gameStage === "start" && <StartScreen/>} 
        {gameStage === "game" && <StartScreen/>} 
        {gameStage === "end" && <StartScreen/>} 
    </div>
  );
}

export default App;
