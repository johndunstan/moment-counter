import React from 'react'
import CountdownContainer from './countdown/CountdownContainerComponent'
import Stats from './stats/StatsComponent'
import About from './about/AboutComponent'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  withRouter,
} from 'react-router-dom'

// NOTE: When I start having multiple lists, I'll want to start using 'match' with React Router

// TODO: Set up a basic 404-page to route to

function Navbar(props) {
  return (
    <nav>
      <h1>Moment Counter</h1>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink activeClassName="active-nav-item" to="/stats">
            Stats
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active-nav-item" to="/about">
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
