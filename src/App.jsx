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
  const [pickWord, setPickWord] = useState("");
  const [pickCategory, setPickCategory] = useState("");
  const [letter, setLetter] = useState([])


  // Carregando os dados para o jogo
  const pickWordAndPickCategory = () => {
    const categorys = Object.keys(words) // retorna para a variavel um array com as keys do objeto especificado.

    // Aqui é passado para a var category o array categorys em um indici aleatorio ultilizando o Math.random para gerar um numero aleatorio baseado no numero total de elementos keys do object e o Math.floor para arredondar o numero para um inteiro.
    const category = categorys[Math.floor(Math.random() * Object.keys(categorys).length)]

    const word = words[category][Math.floor(Math.random() * words[category].length)]

    return {word, category};
  }


  // iniciando o jogo
  const startGame = () => {
    const {word, category} = pickWordAndPickCategory();
    let wordLetters = word.split('')
    wordLetters = wordLetters.map((i) => i.toLowerCase());
    setPickCategory(category)
    setPickWord(word)
    setLetter(letter)
    setGameStage(stages[1].name)
    console.log(category, word)
    console.log(wordLetters)
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
