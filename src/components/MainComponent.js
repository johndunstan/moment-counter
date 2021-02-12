import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import Navbar from './NavbarComponent'
import CountdownContainer from './countdown/CountdownContainerComponent'
import Stats from './stats/StatsComponent'
import About from './about/AboutComponent'
import Footer from './FooterComponent'

class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showCompleted: true,
      listOfLists: [
        {
          id: 1,
          name: 'NuCamp Saturdays',
          items: [
            {
              id: 1,
              isComplete: true,
              description: null,
              date: null,
              time: null,
              duration: null,
            },
            {
              id: 2,
              isComplete: false,
              description: null,
              date: null,
              time: null,
              duration: null,
            },
            {
              id: 3,
              isComplete: true,
              description: null,
              date: null,
              time: null,
              duration: null,
            },
          ],
        },
      ],
    }
  }

  // NOTE: When I start having multiple lists, I'll want to start using 'match' with React Router
  // TODO: Set up a basic 404-page to route to

  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/stats">
            <Stats />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
            <CountdownContainer
              showCompleted={this.state.showCompleted}
              name={this.state.listOfLists[0].name}
              items={this.state.listOfLists[0].items}
            />
          </Route>
        </Switch>
        <Footer />
      </div>
    )
  }
}

export default Main
