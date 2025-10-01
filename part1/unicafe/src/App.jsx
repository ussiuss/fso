import { useState } from 'react'

const Header = props => <h1>{props.header}</h1>

const Button = (props) => (
  <button onClick={props.onClick}>
    {props.text}
  </button>
) 

const StatisticLine = (props) => {
  return(
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  ) 
}

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
      <table>
        <tbody>
        <StatisticLine text="good" value={props.good} />
        <StatisticLine text="neutral" value={props.neutral} />
        <StatisticLine text="bad" value={props.bad} />
        <StatisticLine text="all" value={all} />
        <StatisticLine text="average" value={average} />
        <StatisticLine text="positive" value={positive + ' %' } />
        </tbody>
      </table>
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