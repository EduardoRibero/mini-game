import "./Game.css"

const Game = ({verifyLetter, pickCategory, pickWord, letters, guessesletters, wrongLetters, guesses, score}) => {
  return (
    <div className="game">

      <p className="points">
          <span>Pontuação: {score}</span>
      </p>

      <h1>Advinhe a palavra:</h1>

      <h3 className="tip">
          Dica sobre a palavra: <span>{pickCategory}</span>
      </h3>

      <p>Você ainda tem {guesses} tentativa(s).</p>

      <div className="wordContainer">
        {letters.map((letter, i) =>
          guessesletters.includes(letter) ? (
            <span className="letter" key={i}>
              {letter}
            </span>
          ) : (
            <span key={i} className="blankSquare"></span>
          )
        )}
      </div>

      <div className="letterContainer">
        <p>Tente adivinhar uma letra da palavra:</p>
        <form>
          <input type="text" name="letter" maxLength="1" required />
          <button>Jogar</button>
        </form>
      </div>

      <div className="wrongLetterContainer">
        <p>
          Letras ja utilizadas:
        </p>
        {wrongLetters.map((letra, i) => (
          <span key={i}>{letra}</span>
        ))}
      </div>
    </div>
  )
}

export default Game