const Header = (props) => <h1>{props.course}</h1>

const Content = (props) => {
  console.log(props)
  return(
  <div>
    {props.parts.map(part =>
      <Part key={part.id} part={part}/>
    )}
  </div>
  )
}

const Part = (props) => (
  <p>
    {props.part.name} {props.part.exercises}
  </p>
)

const Total = (props) => {
  console.log(props);
  const total = props.total.reduce((sum, part) => sum + part.exercises, 0)       
  return(
  <p>
    <b>Total of {total} exercises</b>
  </p>
  )
}

const Course = (props) => {
  console.log(props)
  const {course} = props
  return(
    <div>
      <Header course={course.name}/>
      <Content parts={course.parts}/>
      <Total total={course.parts}/>
    </div>
    
  )
}

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return <Course course={course} />
}

export default App