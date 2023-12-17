import React, {useContext, useState} from 'react'
import './NavBar.css'
import { ReactComponent as Logo } from '../../Assets/Home/icons8-razer-logo.svg'
import { ReactComponent as Search } from '../../Assets/Home/icons8-search.svg'
import { ReactComponent as Cart } from '../../Assets/Home/cart_icon.svg'
import { NavLink } from 'react-router-dom'
import { ReactComponent as NavbarMenu } from '../../Assets/Home/mobile-menu.svg'
import { CartFunctionContext } from '../SidebarCart/SidebarCart'

const URLTEXT = {
  Shop: "商店",
  Desktop: "桌上型電腦", 
  Console: "遊戲主機",
  Phone: "手機",
  LifeStyle: "生活產品",
  Service: "服務",
  Coummunity: "社群",
  Support: "支援",
}
const labelArray = Object.keys(URLTEXT) // ["Shop", "Desktop", ...]

const NavBar = () => {

  const intialPage = "Home"
  const [currentPage, setCurrentPage] = useState(intialPage)
  const [dropdownMenuToggle, setDropdownMenuToggle] = useState(false)
  
  const {
    handleCartToggle,
  } = useContext(CartFunctionContext)


  const handleHamburgerClicked = () => {
    setDropdownMenuToggle((prev) => !prev )
  }

  const handleNavlinkClicked = (la) => {
    setCurrentPage(la)
    setDropdownMenuToggle((prev) => !prev )
  }

  const isToggled = (dropdownMenuToggle ? "toggled" : null)

  const textLinks = 
  <ul className={`link-ul ${isToggled}`}>
    {labelArray.map((la, i) => {
      
      const isCurrentPage = (currentPage === la ? <span className='clicked'>{URLTEXT[la]}</span> : URLTEXT[la])
      
      return(
      <li key={`navbar-label-${la}`} className='nav-link'>
          <NavLink to={`/${la}`} className='label hover' key={la} onClick={() =>handleNavlinkClicked(la) }>
          {isCurrentPage}</NavLink>
      </li>)
    })}
  </ul>

  const iconLinks = {
    hamburger: <NavbarMenu className="hamburger-button" onClick={() => handleHamburgerClicked()} />,
    razer: <Logo className='navbar-icon-razer' alt="icon-razer" onClick={() =>setCurrentPage(intialPage)}/>,
    search: <Search className='navbar-icon-search icon'  alt="icon-search"/>,
    cart: <Cart className='navbar-icon-cart icon' alt="icon-cart" onClick={() => handleCartToggle()}/>
  }

  return (
    <>
    <div className="navbar-slot"></div>
    <nav className='navbar'>
      <ul className='navbar-ul'>
        <li className="mobile">{iconLinks.hamburger}</li>
        <li className="links-container">{textLinks}</li>  
        <li className='navbar-icon-razer'><NavLink to='/'>{iconLinks.razer}</NavLink></li>
        <li className='navbar-icon-search window'>{iconLinks.search}</li>
        <li className='navbar-icon-cart' >{iconLinks.cart}</li>
      </ul>
    </nav>
    </>
  )
}

export default NavBar

