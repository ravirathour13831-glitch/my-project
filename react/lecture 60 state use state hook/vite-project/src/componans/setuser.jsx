import { useState } from "react"

function Setuser(setuser,user) {


  return (
     
    <div>
        <h2>new {user}</h2>
        <input type="text" placeholder='new user' onChange={(e)=> setuser(e.target.value)}/>
    </div>
  )
}

export default Setuser