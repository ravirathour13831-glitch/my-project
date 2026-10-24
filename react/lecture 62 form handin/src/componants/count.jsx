import React, { useRef, useState } from 'react'

function Count() {
  const[count , setcount] = useState(0)
  const userefbtn = useRef(null)

  const inputhand = (e)=>{
    console.log(userefbtn)
    userefbtn.current.placeholder ="enter password"
     userefbtn.current.focus();
      userefbtn.current.style.color="red"
  }
  return (
    <div>
      <button onClick={(e)=>setcount(count+1)}>click this button {count}</button>
      <br /><br />
      <input ref={userefbtn} type="text" placeholder='enter your name' minLength={5} />
      <button onClick={inputhand} >press your button</button>
    </div>
  )
}

export default Count