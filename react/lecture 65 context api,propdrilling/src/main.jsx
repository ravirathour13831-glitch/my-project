
import { StrictMode, createContext } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

export const UserContext = createContext("")

const username = 'ravi shahu'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserContext.Provider value={username}>
      <App />
    </UserContext.Provider>
  </StrictMode>
)
