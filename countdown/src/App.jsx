// COMPONENTES
import Title from './components/Title'
import Counter from './components/Counter'

// ESTILOS
import './App.css'

// IMG
import Fireworks from './assets/fireworks.jpg'

// HOOKS
import useCountdown from './hooks/useCountdown'


function App() {
  const [day, hour, minute, second] = useCountdown('Dez 2, 2024 00:00:00')
  
  return (
    <div className="App" style={{backgroundImage: `url(${Fireworks})`}}>
      <div className="container">
        <Title title='Contagem regressiva para o meu Níver'/>

        <div className="countdown-container">
          <Counter title='Dias' number={day}/>
          <Counter title='Horas' number={hour}/>
          <Counter title='Minutos' number={minute}/>
          <Counter title='Segundos' number={second}/>
        </div>
      </div>
    </div>
  )
}

export default App
