// COMPONENTES
import { Outlet } from 'react-router-dom'

// ESTILOS
import './App.css'

// IMG
import Fireworks from './assets/fireworks.jpg'

// HOOKS



function App() {
  
  
  return (
    <div className="App" style={{backgroundImage: `url(${Fireworks})`}}>
      <div className="container">
        <Outlet/>
      </div>
    </div>
  )
}

export default App
