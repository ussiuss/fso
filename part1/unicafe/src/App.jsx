import { useState } from 'react'

const Header = props => <h1>{props.header}</h1>

const Button = (props) => (
  <button onClick={props.onClick}>
    {props.text}
  </button>
) 

const App = () => {

  // header texts
  const headerFeedback = "give feedback"
  const headerStatistics = "statistics"

  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Header header={headerFeedback}/>
      <Button onClick={ () => setGood(good + 1)} text="good"/>
      <Button onClick={ () => setNeutral(neutral + 1)} text="neutral"/>
      <Button onClick={ () => setBad(bad + 1)} text="bad"/>
      <Header header={headerStatistics}/>
      <div>good {good}</div>
      <div>neutral {neutral}</div>
      <div>bad {bad}</div>
    </div>
  )
}

export default App