import React from "react"
import SearchBar from "../SearchBar"
import style from './Nav.module.css'
import { Link, NavLink } from "react-router-dom";
import App from "../../App";


const Nav = (props) => {
  
    return (
        <div className={style.nav}>
          <NavLink to={'/'}>
            <button className={style.inicio}>Login</button>

          </NavLink>
          <NavLink to='/home'>

            <button className={style.home}>Home</button>
          </NavLink>

          <NavLink to='/favorites'>
            <button className={style.about}>Favorites</button>
          </NavLink>
          
          <NavLink to='/about'>

            <button className={style.about}>About</button>
          </NavLink>

          
        <SearchBar onSearch={props.onSearch} />
        <button className={style.logOut} onClick={props.logOut}>Log Out</button>
        </div> 
    )
}

export default Nav;