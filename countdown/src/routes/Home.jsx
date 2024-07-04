import { useState } from 'react'

import React from 'react'

import './Home.css'

const Home = () => {
    const [title, setTitle] = useState()
    const [date, setDate] = useState()
    const [image, setImage] = useState()
    const [color, setColor] = useState()

    const handleSubmit = (e) => {
        e.preventDefault()

        const eventObjetct = {
            title,
            date,
            image,
            color
        }
    
        console.log(eventObjetct)
    }

    

  return (
    <div className='home'>
        <h2>Monte sua contagem regressiva!</h2>

        <form className="countdown-form" onSubmit={handleSubmit}>
            <label>
                <span>Título:</span>
                <input type="text" name='title' placeholder='Digite o título do evento' onChange={(e) => setTitle(e.target.value)} required/>
            </label>

            <label>
                <span>Data do evento:</span>
                <input type="date" name='date' onChange={(e) => setDate(e.target.value)} required/>
            </label>

            <label>
                <span>Imagem:</span>
                <input type="text" name='image' placeholder='Insira aqui a URL da sua imagem' onChange={(e) => setImage(e.target.value)}/>
            </label>

            <label>
                <span>Cor tema:</span>
                <input type="color" name='color' onChange={(e) => setColor(e.target.value)} required/>
            </label>

            <input type="submit" value='Enviar' />
        </form>
    </div>
  )
}

export default Home