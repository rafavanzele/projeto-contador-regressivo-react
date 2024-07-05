// COMPONENTES
import { Outlet } from 'react-router-dom'

import { useContext } from 'react'

import { CountdownContext } from './context/CountdownContext'

// ESTILOS
import './App.css'

// IMG
import Fireworks from './assets/fireworks.jpg'




function App() {
  const {event} = useContext(CountdownContext)
  
  let  eventImage = null

  if(event) eventImage = event.image
  
  return (
    <div className="App" style={
      eventImage 
      ? ({backgroundImage: `url(${eventImage})`})
      : ({backgroundImage: `url(${Fireworks})`})}>
      <div className="container">
        <Outlet/>
      </div>
    </div>
  )
}

export default App
