import React from 'react'
import './Banner.css'
import { Link, } from 'react-router-dom';

const Banner = ({image_banner, headtitle, subtitle, info_link}) => {

const InfoLink = (textURL) => { // {"XXX": url, "XXX": url,...}
  const subtitleText = Object.keys(textURL); //["XXX", "XXX",...]
  return (
    <div className='link-info-container'>
      {subtitleText.map((text, i) => {
        return (
          <Link to={`${textURL[text]}`} key={`banner-link-info-${i}`}>
            <div className='link-info'>
              <span className='link'>{text}</span>
              <span className='arrow-symbol'>{`>`}</span>
            </div>
          </Link>
        )
      })}
    </div>
  )
}

  return (
    <div className='banner'>
      <div className="banner-image-container">
        <img src={image_banner} alt="image_banner" className="banner-image" />
      </div>
      <div className="banner-info-container">
        <p className='headtitle'>{headtitle}</p>
        <p className='subtitle'>{subtitle}</p>
      {InfoLink(info_link)}
      </div>
    </div>
  )
}

export default Banner
