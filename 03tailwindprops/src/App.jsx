import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
  let myObj= {
    username: "Mukim chaudhary",
    age: 23
  }

  return (
    <>
      <hi className = 'bg-green-600 rounded mb-4'>Tailwind test</hi>
     <Card username="Zoya salmani" />
     <Card username="Alina salmani"/>
    </>
  )
}

export default App
