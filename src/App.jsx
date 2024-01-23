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

const guessesQnt = 10;

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name)
  const [words] = useState(wordsList)
  const [pickWord, setPickWord] = useState("")
  const [pickCategory, setPickCategory] = useState("")
  const [letters, setLetters] = useState([]);
  const [guessesLetters, setGuessesLetters] = useState([])
  const [wrongLetters, setWrongLetters] = useState([])
  const [guesses, setGuesses] = useState(guessesQnt)
  const [score, setScore] = useState(0)
  


  // Carregando os dados para o jogo
  const pickWordAndPickCategory = useCallback(() => {
    const categorys = Object.keys(words) // retorna para a variavel um array com as keys do objeto especificado.

    // Aqui é passado para a var category o array categorys em um indici aleatorio ultilizando o Math.random para gerar um numero aleatorio baseado no numero total de elementos keys do object e o Math.floor para arredondar o numero para um inteiro.
    const category = categorys[Math.floor(Math.random() * Object.keys(categorys).length)]

    const word = words[category][Math.floor(Math.random() * words[category].length)]

    return {word, category};
  }, [words]);


  // iniciando o jogo
  const startGame = useCallback(() => {
    clearLetterStates();
    const {word, category} = pickWordAndPickCategory();
    let wordLetters = word.split("");
    wordLetters = wordLetters.map((i) => i.toLowerCase());
    setLetters(wordLetters);
    setPickCategory(category);
    setPickWord(word);
    setGameStage(stages[1].name);
  }, [pickWordAndPickCategory]);

  const verifyLetter = (letter) => {
    const normalizedLetter = letter.toLowerCase();

   // Verificar se a letra já foi utilizada 
   if ( guessesLetters.includes(normalizedLetter) || wrongLetters.includes(normalizedLetter)){ //refeito
        return;
   }

   if (letters.includes(normalizedLetter)){
      setGuessesLetters((actualGessesLetters) => [...actualGessesLetters,...normalizedLetter,]);
   }else{
      setWrongLetters((actualWrongLetters) => [...actualWrongLetters,...normalizedLetter,]);
      setGuesses((actualGuesses) => actualGuesses - 1)
   }
  }

  const clearLetterStates = () => {
    setGuessesLetters([])
    setWrongLetters([])
  }

  useEffect(() => {
    if(guesses <= 0){
      clearLetterStates();
      setGameStage(stages[2].name)
    }
  }, [guesses]);

  useEffect(() => {
    const unicLetters = [...new Set(letters)]
    if(guessesLetters.length === unicLetters.length && !stages[0].name){
      setScore((atualScore) => atualScore + 100);
      startGame();
    }
  }, [guessesLetters, letters, startGame]);

  const restart = () => {
    setGuesses(guessesQnt)
    setScore(0)
    setGameStage(stages[0].name)
  }


  return (
    <div className="App">
      {/*Renderização condicional, se o 'gameStage' for igual a 'start' ele exibe o componente <StartScreen/>*/}
        {gameStage === "start" && <StartScreen startGame={startGame}/>} 
        {gameStage === "game" && (
          <Game 
          verifyLetter={verifyLetter}
          pickWord={pickWord}
          pickCategory={pickCategory}
          letters={letters}
          guessesLetters={guessesLetters}
          wrongLetters={wrongLetters}
          guesses={guesses}
          score={score}
          />)} 
        {gameStage === "end" && <GameOver restart={restart} score={score}/>} 
    </div>
  );
}

export default App;
