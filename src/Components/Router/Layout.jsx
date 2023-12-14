import React from 'react'
import SidebarCart from '../SidebarCart/SidebarCart'
import NavBar from '../NavBar/NavBar'
import Notfication from '../Notification/Notfication'
import Footer from '../Footer/Footer'

const Layout = ({children}) => {
  return (
    <SidebarCart>
      <NavBar/>
      <Notfication/>
        {children}
      <Footer/>
    </SidebarCart>
  )
}

export default Layout
