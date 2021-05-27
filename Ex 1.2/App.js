import React from 'react'

const Header =(props) =>{
  return(
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Content= (props) =>{
  return (
    <div>
      <Part part1={props.part1} exercise1={props.exercise1}/>
      <Part part2={props.part2} exercise2={props.exercise2}/>
      <Part part3={props.part3} exercise3={props.exercise3}/>
    </div>
  )
}

const Part =(props) =>{
  return (
    <div>
      <p>{props.part} {props.exercise}</p>
    </div>
  )
}

const Total = (props) =>{
  return (
    <div>
      <p>Number of exercises {props.e1+props.e2+props.e3}</p>
    </div>
  )
}
const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course}/>
      <Part part={part} exercise={exercises}/>
      <Total e1={exercises1} e2={exercises2} e3={exercises3}/>
    </div>
  )
}

export default App 