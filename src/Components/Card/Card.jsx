import React from 'react'
import { NavLink } from 'react-router-dom'
import './Card.css'

const Card = ({image, cardName, cardInfo, moreURL}) => {
  return (
    <div className='Card'>
      <div className="card-upper">
        <img className='image' src={image} alt={`${cardName}-img`} />
      </div>
      <div className="card-lower">
        <p className='cardName'>{cardName}</p>
        <p className='cardInfo'>{cardInfo}</p>
        <NavLink className='moreURL'>{"了解更多 >"}</NavLink>
      </div>
    </div>
  )
}

export default Card
