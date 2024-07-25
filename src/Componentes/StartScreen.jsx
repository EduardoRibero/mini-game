import "./StartScreen.css"
import Button from 'react-bootstrap/Button';

const StartScreen = ({startGame}) => {
  return (
    <div className="text-white">
        <h1>Secret word</h1>
        <p>Click no botão abaixo para começar a jogar</p>
        <Button onClick={startGame}>Começar o jogo</Button>
    </div>
  )
}

export default StartScreen