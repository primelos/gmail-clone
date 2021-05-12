import React from 'react'
import './Header.css'
import MenuIcon from "@material-ui/icons/Menu";
import { IconButton } from '@material-ui/core'


const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <img
          src="https://i.pinimg.com/originals/ae/47/fa/ae47fa9a8fd263aa364018517020552d.png"
          alt="gmail-icon"
        />
      </div>
      <div className="header__middle"></div>
      <div className="header__right"></div>
    </div>
  );
}
import './Header.css'
export default Header
