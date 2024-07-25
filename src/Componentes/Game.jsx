import { useState, useRef } from "react"
import "./Game.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Col } from "react-bootstrap";



const Game = ({ verifyLetter, pickCategory, letters, guessesLetters, wrongLetters, guesses, score }) => {

  const [letter, setLetter] = useState("");
  const letterInputRef = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault();
    verifyLetter(letter)
    setLetter("")
    letterInputRef.current.focus();
  }

  return (
      <Container>
        <Row className="text-white">
          <p className="mt-4">
            <span>Pontuação: {score}</span>
          </p>
        </Row>
        <Row className="text-white">
          <h1>Adivinhe a palavra:</h1>
        </Row>
        <Row>
          <h3 className="tip text-white">
            Dica sobre a palavra: <span>{pickCategory}</span>
          </h3>
        </Row>
        <Row className="text-white">
          <p>Você ainda tem <span className="tip2">{guesses}</span> tentativa(s).</p>
        </Row>

        <div className="wordContainer">
          {letters.map((letter, i) =>
            guessesLetters.includes(letter) ? (
              <span className="letter" key={i}>
                {letter}
              </span>
            ) : (
              <span key={i} className="blankSquare"></span>
            )
          )}
        </div>

        <Row className="text-white">
          <Col>
            <div className="letterContainer">
              <p>Tente adivinhar uma letra da palavra:</p>
              <form onSubmit={handleSubmit}>
                <input type="text" name="letter" maxLength="1" required onChange={(e) => setLetter(e.target.value)} value={letter} ref={letterInputRef} />
                <button variant="primary">Jogar</button>
              </form>
            </div>
          </Col>
        </Row>
        <Row className="text-white">
          <div>
            <p>
              Letras já utilizadas:
            </p>
            {wrongLetters.map((letra, i) => (
              <span key={i}>{letra}, </span>
            ))}
          </div>
        </Row>
      </Container>
  )
}

export default Game