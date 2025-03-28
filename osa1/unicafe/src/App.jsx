import { useState } from 'react'

// Button-komponentti palautteen antamiseen
const Button = ({ text, handleClick }) => {
  return <button onClick={handleClick}>{text}</button>
}

// StatisticLine-komponentti tilastorivien näyttämiseen
const StatisticLine = ({ text, value }) => {
  return (
    <p>
      <strong>{text}</strong> {value}
    </p>
  )
}

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad
  const average = total === 0 ? 0 : (good * 1 + neutral * 0 + bad * -1) / total
  const positivePercentage = total === 0 ? 0 : (good / total) * 100

  if (total === 0) {
    return <p>Ei palautteita vielä.</p>
  }

  return (
    <div>
      <StatisticLine text="Hyvä palaute (+1)" value={good} />
      <StatisticLine text="Neutraali palaute (+0)" value={neutral} />
      <StatisticLine text="Huono palaute (-1)" value={bad} />
      <StatisticLine text="Yhteensä" value={total} />
      <StatisticLine text="Keskiarvo" value={average.toFixed(1)} />
      <StatisticLine text="Positiivisia" value={`${positivePercentage.toFixed(1)}%`} />
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Anna palautetta</h1>
      <Button text="Hyvä" handleClick={() => setGood(good + 1)} />
      <Button text="Neutraali" handleClick={() => setNeutral(neutral + 1)} />
      <Button text="Huono" handleClick={() => setBad(bad + 1)} />
      
      <h1>Tilastot</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App