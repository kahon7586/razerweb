import React from 'react'
import { useParams } from 'react-router-dom'
import './Test.css'


const Test = () => {

const { id } = useParams()

  return (
    <div className='test-page'>
      <h1>Test page {(id ? id : null )}</h1>
    </div>
  )
}

export default Test
