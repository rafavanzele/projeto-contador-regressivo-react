import Title from '../components/Title'
import Counter from '../components/Counter'

// HOOK
import useCountdown from '../hooks/useCountdown'

const Countdown = () => {
    const [day, hour, minute, second] = useCountdown('Dez 2, 2024 00:00:00')

  return (
    <>
        <Title title='Contagem regressiva para o meu Níver'/>

        <div className="countdown-container">
        <Counter title='Dias' number={day}/>
        <Counter title='Horas' number={hour}/>
        <Counter title='Minutos' number={minute}/>
        <Counter title='Segundos' number={second}/>
        </div>
    </>
  )
}

export default Countdown