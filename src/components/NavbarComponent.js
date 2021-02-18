import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav>
      <h1>Moment Counter</h1>
      <ul>
        <li>
          <NavLink className="nav-item" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className="nav-item"
            activeClassName="active-nav-item"
            to="/stats"
          >
            Stats
          </NavLink>
        </li>
        <li>
          <NavLink
            className="nav-item"
            activeClassName="active-nav-item"
            to="/about"
          >
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
