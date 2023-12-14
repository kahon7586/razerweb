import React, { useState } from 'react'
import './NavBarPc.css'
import {NavBarTextURL_Desktop}  from '../../Data/NavBarTextURL/Desktop/NavBarTextURL_Desktop.js'
import { NavLink } from 'react-router-dom'

const NavBarPc = () => {

  const [dropdownMenu, setDropdownMenu] = useState(false)

  const handleDropdownMenuToggler = () =>{
    document.getElementsByClassName('link-container')[0].style.display=(!dropdownMenu ? "block" : "none")
    setDropdownMenu((prev) => !prev)
  }

  const linkText = Object.keys(NavBarTextURL_Desktop);


  return (
    <div className='NavBarPc'>
      <div className='dropdown-menu-toggler' onClick={handleDropdownMenuToggler}>
        <span className='toggle-text'>桌上型電腦</span><span className='toggle-arrow'>{(dropdownMenu ? "▼" : "▲")}</span>
      </div>
      <div className="link-container">

        <ul >
          {linkText.map((link, i ) => {
            return(
              <li key={`navbar-${i}-${link}`}><NavLink to={NavBarTextURL_Desktop[link]}>{link}</NavLink></li>
            )
          })}
        </ul>

      </div>
    </div>
  )
}

export default NavBarPc
