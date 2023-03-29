import React from 'react'
import "./Styles/Button.css"

const Button = ({handleNewQuote}) => {
  return (
    <button className='Button' type="button" onClick={handleNewQuote}><i class='bx bx-planet' ></i></button>
  )
}

export default Button