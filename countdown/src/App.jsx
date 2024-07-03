// COMPONENTES
import Title from './components/Title'
import Counter from './components/Counter'

// ESTILOS
import './App.css'

// IMG
import Fireworks from './assets/fireworks.jpg'


function App() {
  
  return (
    <div className="App" style={{backgroundImage: `url(${Fireworks})`}}>
      <div className="container">
        <Title title='Contagem regressiva'/>

        <div className="countdown-container">
          <Counter title='Dias' number={2}/>
          <Counter title='Horas' number={2}/>
          <Counter title='Minutos' number={2}/>
          <Counter title='Segundos' number={2}/>
        </div>
      </div>
    </div>
  )
}

export default App
