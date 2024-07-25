import "./GameOver.css"
import Button from 'react-bootstrap/Button';

const GameOver = ({restart, score}) => {
  return (
    <div>
        <h1 className="text-white">Fim de Jogo!</h1>
        <h2 className="text-white">Sua pontuação foi: <span>{score}</span></h2>
        <Button className="mt-4" onClick={restart}>Reiniciar o jogo</Button>
    </div>
  )
}

export default GameOver