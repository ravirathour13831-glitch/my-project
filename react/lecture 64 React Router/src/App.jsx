
import './App.css'
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from 'react-router-dom'
import Login from './componats/login'

function Home() {
  return <h1>Welcome to Home Page</h1>
}

function About() {
  return <h1>This is About Us Page</h1>
}

function Product() {
  return <h1>This is Product Page</h1>
}

function Navbar() {
  return (
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/product">Product</Link></li>
      <li><Link to="/about">About</Link></li>
      <Link to="/login">login</Link>
    </ul>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />

        <Route
          path="*"
          element={
            <div>
              <img
                src="https://www.gstatic.com/youtube/src/web/htdocs/img/monkey.png"
                alt="Page not found"
              />
              <h1>Page Not Found</h1>
            </div>
          }
        />

        < Route path='/login' element={<Login/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
