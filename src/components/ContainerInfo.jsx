import React from 'react'
import Button from './Button'
import "./Styles/ContainerInfo.css"

const ContainerInfo = ({quote, handleNewQuote}) => {
    console.log(quote)
  return (
    <section className='ContainerInfo'>
        <h1 className='ContainerInfo__title'>Galaxy Knowledge</h1>

        <Button handleNewQuote = {handleNewQuote} />

        <article>
            <p className='ContainerInfo__phrase'>{quote.phrase}</p>
        </article>

        <article className='ContainerInfo__author'>
       
        <h4>Fuente: {quote.author}</h4>
        </article>
  </section>
  )
}

export default ContainerInfo