import React from 'react'
import './Footer.css'
import { NavLink } from 'react-router-dom'
import {ReactComponent as FacebookIcon} from '../../Assets/Home/SM0001-facebook-grey.svg'
import {ReactComponent as InstagramIcon} from '../../Assets/Home/SM0003-instagram-grey.svg'
import {ReactComponent as TwitterIcon} from '../../Assets/Home/SM0005-twitter-grey.svg'
import {ReactComponent as YoutubeIcon} from '../../Assets/Home/SM0008-youtube-grey.svg'
import {ReactComponent as TwitchIcon} from '../../Assets/Home/SM0009-twitch-grey.svg'
import {ReactComponent as TiktokIcon} from '../../Assets/Home/SM0014-tiktok-grey.svg'
import {ReactComponent as DiscordIcon} from '../../Assets/Home/SM0015-discord-grey.svg'
const FOOTERLABELS = ["購物指南", "探索", "服務", "公司資訊"]

const textURLObj1 = {
  "RazerStores": '/RazerStores',
  "RazerCafe": '/RazerCafe',
  "購買計畫": '/購買計畫',
  "教育優惠": '/教育優惠',
  "Razer 獨賣產品": '/Razer 獨賣產品',
  "RazerStore Rewards": '/RazerStore Rewards',
  "電子報": '/電子報'
}
const textURLObj2 = {
  "技術": '/技術',
  "Chroma RGB": '/Chroma RGB',
  "概念": '/概念',
  "電競": '/電競',
  "合作": '/合作',
}
const textURLObj3 = {
  "尋求支援": '/尋求支援',
  "註冊與產品保固": '/註冊與產品保固',
  "RazerStore 支援": '/RazerStore 支援',
  "管理我的 Razer ID": '/管理我的 Razer ID',
  "支持視頻": '/支持視頻',
}
const textURLObj4 = {
  "關於我們": '/關於我們',
  "人才招募": '/人才招募',
  "Newsroom": '/Newsroom',
  "zVentures": '/zVentures',
  "聯絡我們": '/聯絡我們',
}

const textURLObjs = [textURLObj1, textURLObj2, textURLObj3, textURLObj4]

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='upper-footer'>
        {FOOTERLABELS.map((label, i) => {
          return (
            <div className="footer-label" key={`footer-label-${label}`}>
              <p className='label-heading'>{label}</p>
              {Object.keys(textURLObjs[i]).map(text =>{
                return (<NavLink className="label-link" 
                to={`Test${textURLObjs[i][text]}`} 
                key={`footer-label-link-${text}`}> {text} </NavLink>)
              })}
            </div>
          )})}
          <div className="footer-label social-media" key={`footer-label-social`}>
            <p className='label-heading'>關注我們</p>
            <NavLink to={"/Test/Discord"}><DiscordIcon className="socialMedia-icon"/></NavLink>
            <NavLink to={"/Test/Facebook"}><FacebookIcon className="socialMedia-icon"/></NavLink>
            <NavLink to={"/Test/Twitter"}><TwitterIcon className="socialMedia-icon"/></NavLink>
            <NavLink to={"/Test/Youtube"}><YoutubeIcon className="socialMedia-icon"/></NavLink>
            <NavLink to={"/Test/Twitch"}><TwitchIcon className="socialMedia-icon"/></NavLink>
            <NavLink to={"/Test/Tiktok"}><TiktokIcon className="socialMedia-icon"/></NavLink>
            <NavLink to={"/Test/Instagram"}><InstagramIcon className="socialMedia-icon"/></NavLink>
          </div>

          <div className="footer-slogan">
            <p>FOR GAMERS. BY GAMERS.™</p>
          </div>
      </div>
      <div className='hr'></div>
      <div className='lower-footer'>
        <p>
          <span>Copyright © 2023 Razer Inc. All rights reserved.法律條款 </span>
          <span>隱私權政策</span>   
          <span>Cookie 設置</span> 
        </p>
        <p><span>臺灣</span><span>變更位置</span></p>
      </div>
    </footer>
  )
}

export default Footer
