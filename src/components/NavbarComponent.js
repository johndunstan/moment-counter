import React from 'react'
import CountdownContainer from './countdown/CountdownContainerComponent'
import Stats from './stats/StatsComponent'
import About from './about/AboutComponent'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

// TO DO: Change my links to <NavLink>'s in order to add active classes automatically

// NOTE: When I start having multiple lists, I'll want to start using 'match' with React Router

function Navbar(props) {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/stats">Stats</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/stats">
            <Stats />
          </Route>
          <Router path="/">
            <CountdownContainer
              showCompleted={props.showCompleted}
              name={props.name}
              items={props.items}
            />
          </Router>
        </Switch>
      </div>
    </Router>
  )
}

export default Navbar
