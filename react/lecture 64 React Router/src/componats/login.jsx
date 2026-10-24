import React from 'react'

function Login() {

    function handlelogin(){
        console.log("login")
    }
  return (
    <div>
        <h1>login page</h1>
        <form onSubmit={handlelogin}>
            <input type="text" name="username" id="" />
            <button>login</button>
        </form>
    </div>
  )
}

export default Login