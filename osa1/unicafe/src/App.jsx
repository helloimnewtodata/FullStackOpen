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
    <table>
      <tbody>
        <tr>
          <td><strong>Hyvä palaute (+1)</strong></td>
          <td>{good}</td>
        </tr>
        <tr>
          <td><strong>Neutraali palaute (+0)</strong></td>
          <td>{neutral}</td>
        </tr>
        <tr>
          <td><strong>Huono palaute (-1)</strong></td>
          <td>{bad}</td>
        </tr>
        <tr>
          <td><strong>Yhteensä</strong></td>
          <td>{total}</td>
        </tr>
        <tr>
          <td><strong>Keskiarvo</strong></td>
          <td>{average.toFixed(1)}</td>
        </tr>
        <tr>
          <td><strong>Positiivisia</strong></td>
          <td>{`${positivePercentage.toFixed(1)}%`}</td>
        </tr>
      </tbody>
    </table>
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

      <h1>Tilastojen näyttäminen HTML:n taulukkona</h1>
      <div>
        <p><strong>Hyvä palaute (+1):</strong> {good}</p>
        <p><strong>Neutraali palaute (+0):</strong> {neutral}</p>
        <p><strong>Huono palaute (-1):</strong> {bad}</p>
        <p><strong>Yhteensä:</strong> {good + neutral + bad}</p>
        <p><strong>Keskiarvo:</strong> {(good + neutral * 0 + bad * -1) / (good + neutral + bad || 1).toFixed(1)}</p>
        <p><strong>Positiivisia:</strong> {((good / (good + neutral + bad || 1)) * 100).toFixed(1)}%</p>
      </div>
    </div>
  )
}

export default App