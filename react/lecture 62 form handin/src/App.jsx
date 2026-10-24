
import { useRef, useState } from 'react'
import Todo from './componants/todo'
import Count from './componants/count'
import './App.css'

function App() {
  const [form, setform] = useState({
    name: "ravi",
    email: "",
    password: ""
  })

  const editebtn =  useRef(null)

  function handleChange(e) {
    setform({
   ...form,  [e.target.name]: e.target.value 
    })
  }
 

  function handleSubmit(e) {
    e.preventDefault()
    console.log(form)
  }

  return (
   
    <div ref={editebtn}>
      <form onSubmit={handleSubmit}>
        <h1>Form in React</h1>

        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={form.name}
          onInput={handleChange}
          required
        />

        <br />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={form.email}
          onInput={handleChange}
          required
        />

        <br />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          required
        />

        <br />

        <button type="submit">Submit</button>
      </form>
      <Todo/>
      <Count/>
    </div>
  )
}

export default App
