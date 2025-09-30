import { useState } from 'react'

const Header = props => <h1>{props.header}</h1>

const Button = (props) => (
  <button onClick={props.onClick}>
    {props.text}
  </button>
) 

const Statistics = (props) => {

  // all, average and positive variables
  let all = props.good + props.neutral + props.bad
  let average = 0
  if (all !== 0) {
    average = (props.good - props.bad) / all
  }
  let positive = 0
  if (all !== 0) {
    positive = (props.good / all) * 100
  }

  // feedback display logic
  if(all == 0) {
    return "No feedback given"
    }
    return(
      <div>
        <div>good {props.good}</div>
        <div>neutral {props.neutral}</div>
        <div>bad {props.bad}</div>
        <div>all {all}</div>
        <div>average {average}</div>
        <div>positive {positive} %</div>
      </div>
    ) 
}


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
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App