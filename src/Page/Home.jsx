import React from 'react'
import './Home.css'
import Banner from '../Components/Banner/Banner'
import banner1 from '../Assets/Home/banner1_v2.webp'
import banner2 from '../Assets/Home/banner2.webp'
import banner3 from '../Assets/Home/banner3.webp'


const Home = () => {
  return (
    <div>
      <Banner image_banner={banner1} 
      headtitle={"網路狂歡即將來臨"} 
      subtitle={"提前解鎖CYBER WEEKEND"} 
      info_link={{"立即購買":"/Test/1"}} />

      <Banner image_banner={banner2} 
      headtitle={"全新 RAZER BLADE 14"} 
      subtitle={"小巧尺寸，龐大效能。"} 
      info_link={{"更多資訊":"/Test/moreinfo", "立即購買":"/Test/buynow"}} />

      <Banner image_banner={banner3} 
      headtitle={"RAZER KITSUNE"} 
      subtitle={"光軸加上無比精準度！雙重組合超級無敵"} 
      info_link={{"更多資訊":"/Test/moreinfo", "立即購買":"/Test/buynow"}} />

    </div>
  )
}

export default Home
