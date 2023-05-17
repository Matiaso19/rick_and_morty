import React from "react"
import SearchBar from "../SearchBar"
import style from './Nav.module.css'
import { Link, NavLink } from "react-router-dom";


const Nav = ({onSearch}) => {
    return (
        <div className={style.nav}>
          <NavLink to='/about'>

            <button>About</button>
          </NavLink>
          <NavLink to='/home'>

            <button>Home</button>
          </NavLink>
          

        <SearchBar onSearch={onSearch} />
        </div> 
    )
}

export default Nav;