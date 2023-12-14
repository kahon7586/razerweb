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
    handleAddToCart
  } = useContext(CartFunctionContext)


  const handleHamburgerClicked = () => {
    setDropdownMenuToggle((prev) => !prev )
  }

  const handleNavlinkClicked = (la) => {
    setCurrentPage(la)
    setDropdownMenuToggle((prev) => !prev )
  }



  return (
    <>
    <div className="navbar-slot"></div>
    <nav className='navbar'>
      <ul className='navbar-ul'>
        <li className="mobile">
          <NavbarMenu className="hamburger-button" onClick={() => handleHamburgerClicked()} />
        </li>
        <li className="links-container">
          <div>
            <ul className={`link-ul ${(dropdownMenuToggle ? "toggled" : null)}`}>
              {labelArray.map((la, i) => (
                <li key={`navbar-label-${la}`} className='nav-link'>
                <p className='label hover' key={la} onClick={() =>handleNavlinkClicked(la) }>
                <NavLink to={`/${la}`} >{(currentPage === la ? <span className='clicked'>{URLTEXT[la]}</span> : URLTEXT[la])}</NavLink>
                </p>
              </li>
            ))}
            </ul>
          </div>
        </li>  
        <li className='navbar-icon-razer'> 
          <NavLink to='/'><Logo className='navbar-icon-razer' alt="icon-razer" onClick={() =>setCurrentPage(intialPage)}/></NavLink>
        </li>
        <li className='navbar-icon-search window'>
          <Search className='navbar-icon-search icon'  alt="icon-search"/>
        </li>
        <li className='navbar-icon-cart' onClick={() => handleCartToggle()}>
            <Cart className='navbar-icon-cart icon' alt="icon-cart" />
        </li>
      </ul>
    </nav>
    </>
  )
}

export default NavBar


// const NavBar = () => {

//   const intialPage = "Home"
//   const [currentPage, setCurrentPage] = useState(intialPage)

//   return (
//     <nav className='navbar'>
//       <ul>
//         <li className="mobile">
//           <NavbarMenu>
//           </NavbarMenu>
//         </li>
//         <li className='navbar-icon-razer'> 
//           <NavLink to='/'><Logo className='navbar-icon-razer' alt="icon-razer" onClick={() =>setCurrentPage(intialPage)}/></NavLink>
//         </li>
//         <li className='window navbar-icon-search'>
//           <Search className='navbar-icon-search icon'  alt="icon-search"/>
//         </li>
//         <li className='navbar-icon-cart'>
//           <NavLink to='/Cart'><Cart className='navbar-icon-cart icon' alt="icon-cart" onClick={() =>setCurrentPage("Cart")}/></NavLink>
//         </li>

//       {labelArray.map((la, i) => (
//         <li key={`navbar-label-${la}`} className='nav-link bar'>
//           <p className='label hover' key={la} onClick={() =>setCurrentPage(la)}>
//           <NavLink to={`/${la}`} >{(currentPage === la ? <span className='clicked'>{URLTEXT[la]}</span> : URLTEXT[la])}</NavLink>
//           </p>
//         </li>
//       ))}
        
//       </ul>
//     </nav>
//   )
// }

// export default NavBar
