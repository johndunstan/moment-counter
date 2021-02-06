import React from 'react'
import CountdownContainer from './countdown/CountdownContainerComponent'
import Stats from './stats/StatsComponent'
import About from './about/AboutComponent'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

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
