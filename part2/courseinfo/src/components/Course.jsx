const Header = (props) => <h2>{props.name}</h2>

const Content = (props) => {
  return(
    <div>
      {props.parts.map(part =>
        <Part key={part.id} part={part}/>
      )}
    </div>
  )
}

const Total = (props) => {
  const total = props.parts.reduce((sum, part) => sum + part.exercises, 0)
  return(
    <div>
      <b>total of {total} exercises</b>
    </div>
  )
}

const Part = (props) => {
  return(
    <div>
      {props.part.name} {props.part.exercises}
  </div>
  )
}

const Course = (props) => {
  return(
    <div>
      <Header name={props.course.name}/>
      <Content parts={props.course.parts}/>
      <Total parts={props.course.parts}/>
    </div>
  )
}

export default Course