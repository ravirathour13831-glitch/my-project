
import { useState, useEffect } from 'react'
import Settoggle from './settoggle'
import './App.css'
import axios from 'axios'

function App() {
  const [productcount, setproductcount] = useState(0)
  const [product, setproduct] = useState([])
  const [name, setname] = useState('')
  const [isloading, setisloading] = useState(true)

  useEffect(() => {
    async function getproduct() {
      try {
        setisloading(true)

        // const res = await fetch(
        //   'https://dummyjson.com/products?limit=0'
        // )

        // const data = await res.json()

        const res = await axios.get("https://dummyjson.com/products?limit=0")
        
        setproductcount(data.total)
        setproduct(data.products)
      } catch (error) {
        console.log(error)
      } finally {
        setisloading(false)
      }
    }

    getproduct()

    return () => {
      console.log('cleanup')
    }
  }, [name])

  function loading() {
    return product
      .filter((p) =>
        p.title.toLowerCase().includes(name.toLowerCase())
      )
      .map((p) => (
        <div key={p.id} className="product-card">
          <h3>{p.title}</h3>

          <img
            src={p.thumbnail}
            alt={p.title}
            width="150"
          />

          <p>Price: ${p.price}</p>
        </div>
      ))
  }

  return (
    <div>
      <Settoggle />

      <h1>Product List</h1>

      <input
        type="text"
        value={name}
        onChange={(e) => setname(e.target.value)}
        placeholder="Search product..."
      />

      <p>Products: {productcount}</p>

      {isloading ? (
        <div className="loader"></div>
      ) : (
        loading()
      )}
    </div>
  )
}

export default App
