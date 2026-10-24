
import { useState } from 'react'
import Loginbtn from './componats/loginbtn'
import Logoutbtn from './componats/logoutbtn'

function Pass() {
  const [button, setbutton] = useState(true)

  if (button) {
    return <Logoutbtn />
  } else {
    return <Loginbtn />
  }
}

export default Pass
