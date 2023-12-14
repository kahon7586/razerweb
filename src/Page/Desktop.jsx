import React from 'react'
import './Desktop.css'
import NavBarPc from '../Components/NavBar/NavBarPc.jsx' 
import {card_Desktop as data_card_Desktop} from '../Data/Card/Desktop.js'
import Card from '../Components/Card/Card.jsx'



const Slogan = ( { title, content } ) => {
  return (
    <div className='Slogan'>
      <p className="slogan-title">{title}</p>
      <p className="slogan-content">{content}</p>
    </div>
  )
}

const Hero = ({ title, subtitle, imgName }) => {

  return (
    <div className="Hero">
      <img className='hero-img' src={require(`../Assets/pc/${imgName}`)} alt={imgName} />
      <p className='hero-title'>{title}</p>
      <p className="hero-subtitle">{subtitle}</p>
      <p className="hero-moreURL">{`了解更多>`}</p>
    </div>
  )
}

const Desktop = () => {
  return (
    <div className='desktop-body-container'>
      <NavBarPc />
      <div className='desktop-body'>

        {data_card_Desktop.map((el, i) =>{
          return (
            <Card key={`Desktop-Card-${i}`} 
            image={el.image} 
            cardName={el.cardName} 
            cardInfo={el.cardInfo} 
            moreURL={el.moreURL} />
          )
        })}
      </div>
      <Slogan title="配件" content="如果沒有高性能的配件配合，再強大的裝備也毫無意義。當你體驗到業界首屈一指的精確度、控制和沈浸感時，就會明白什麼是絕對優勢。" />
      <Hero title="完成你的安裝" subtitle="適合所有風格的色彩" imgName="hero.webp"/>
    </div>
      
  )
}

export default Desktop
