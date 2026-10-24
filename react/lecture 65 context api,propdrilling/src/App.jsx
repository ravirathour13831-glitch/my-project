
import { useContext, useEffect } from 'react'
import { UserContext } from './main.jsx'

function GrandChild() {
  const value = useContext(UserContext)

  return (
    <div style={{ backgroundColor: 'teal', padding: '20px' }}>
      <h1>GrandChild - {value}</h1>
    </div>
  )
}

function Child() {
 const value =  useContext(UserContext)
  return (
    <div style={{ backgroundColor: 'green', padding: '20px' }}>
      <h1>Child {value}</h1>
      <GrandChild />
    </div>
  )
}

function Parent({name}) {
  console.log(name)
  return (
    <div style={{ backgroundColor: 'brown', padding: '20px' }}>
      <h1>Parent{name}</h1>
      <Child />
    </div>
  )
}

function App() {

  useEffect((e) =>{

  },[])
  return (
    <div>
       <Parent name={"ravi"} />
    </div>
  )
}

export default App
