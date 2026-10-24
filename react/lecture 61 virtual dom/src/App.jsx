
import { useState } from 'react'
import Key from './key'
import Loginbtn from './componats/loginbtn'
import Logoutbtn from './componats/logoutbtn'

function Pass() {
  const [button, setbutton] = useState(false)

  if (button) {
    return <Logoutbtn />
  } else {
    return <Loginbtn />
  }
}

function Counter({ count, setCount }) {
  return (
    <div>
      <p>ravi</p>
      <h1>{count}</h1>

      <button onClick={() => setCount(count + 1)}>
        Counter Click Me
      </button>
    </div>
  )
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>hii</h1>
      <p>{count}</p>

      <button onClick={() => setCount(count + 1)}>
        Click Me
      </button>

      <Counter count={count} setCount={setCount} />
      <Key />
      <Pass />
    </div>
  )
}

export default App
