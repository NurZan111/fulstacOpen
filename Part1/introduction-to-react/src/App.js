
const Header =(props) =>{
  return(
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Total =(props) =>{
  return(
    <div>
     <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
    </div>
  )
}

const Content =(props) =>{
  return(
    <>
      <p>{props.part[0]} {props.exercises[0]}</p>
      <p>{props.part[1]} {props.exercises[1]}</p>
      <p>{props.part[2]} {props.exercises[2]}</p>
    </>
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
      <Header course={course} />
      <Content part={[part1,part2,part3]} exercises={[exercises1,exercises2,exercises3]}/>
      <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3}/>
    </div>
  )
}

export default App;
