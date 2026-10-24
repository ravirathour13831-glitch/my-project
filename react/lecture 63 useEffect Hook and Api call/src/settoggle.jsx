
import React, { useState } from 'react'

function Settoggle() {
  const [time, settime] = useState(false)

//   function handleClick() {
//     setTimeout(() => {
//       settime(!time)
//     }, 2000)
//   }

  return (
    <div>
      <button onClick={(e)=>settime(!time)}>
        Toggle Time
      </button>

      {time && <h3>Set Time</h3>}
    </div>
  )
}

export default Settoggle
