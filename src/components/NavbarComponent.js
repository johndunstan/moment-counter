import React from 'react'
import CountdownContainer from './countdown/CountdownContainerComponent'
import Stats from './stats/StatsComponent'
import About from './about/AboutComponent'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from 'react-router-dom'

// NOTE: When I start having multiple lists, I'll want to start using 'match' with React Router

// TODO: Set up a basic 404-page to route to

function Navbar(props) {
  return (
    <Router>
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

      <Switch>
        <Route exact path="/stats">
          <Stats />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/">
          <CountdownContainer
            showCompleted={props.showCompleted}
            name={props.name}
            items={props.items}
          />
        </Route>
        <Route path="*">
          <CountdownContainer
            showCompleted={props.showCompleted}
            name={props.name}
            items={props.items}
          />
        </Route>
      </Switch>
    </Router>
  )
}

export default Navbar
