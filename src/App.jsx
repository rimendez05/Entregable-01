import { useState } from 'react'
import './App.css'
import ContainerInfo from './components/ContainerInfo'
import db from "./db/db.json"



const images = ["bg1", "bg2", "bg3", "bg4"]

function App() {
  
  const getRandomItem = (array) => {
    const randomIndex = Math.floor(Math.random() * array.length)
    return array[randomIndex]
  }

  const [quote, setQuote] = useState(getRandomItem(db))
  const [bgImage, setbgImage] = useState(getRandomItem(images))

  const handleNewQuote = () => {
    setQuote(getRandomItem(db))
    setbgImage(getRandomItem(images))
  } 
  
  return (

    <div className= {`App ${bgImage}`}>

    <ContainerInfo quote={quote} handleNewQuote={handleNewQuote}/>

    

    </div>
  )
}

export default App
