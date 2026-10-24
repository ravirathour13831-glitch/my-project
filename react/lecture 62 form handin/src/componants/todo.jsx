import React, { useState } from 'react'

function Todo() {
  const   [item , setitem] = useState(["ravi" , "muskan" , "jacyshraf"])

 
 



  return (
    <div>
        <h2>Todo List</h2>
        <input type="text" name="" id="" />
       <ul>{
            item.map((item , index)=>(
                <li key={index}>{item}
                <button key={index} onClick={(item , index)=> setitem(spilce(index,1))}>
                  
 
                    delete</button>
                </li>
            ))
            }</ul>

            <div>
              {item.map((p , index)=>(
                <details key={index}>
                  <summary>pushpa ki sarkar</summary>
                  <p>{p}</p>
                </details>
              ))}

              <div>
                

              </div>
              
            </div>



    </div>
  )
}

export default Todo