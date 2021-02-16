import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import Navbar from './NavbarComponent'
import CountdownContainer from './countdown/CountdownContainerComponent'
import Stats from './stats/StatsComponent'
import About from './about/AboutComponent'
import Footer from './FooterComponent'
import PageNotFound from './404Component'

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
    this.addItem = this.addItem.bind(this)
    this.completeItem = this.completeItem.bind(this)
    this.removeItem = this.removeItem.bind(this)
    this.toggleShowComplete = this.toggleShowComplete.bind(this)
  }

  addItem() {
    console.log('Item added')
  }

  completeItem() {
    console.log('Item completed')
  }

  removeItem() {
    console.log('Item removed')
  }

  toggleShowComplete = (showCompleted) => {
    this.setState({ showCompleted: !showCompleted })
  }

  // NOTE: When I start having multiple lists, I'll want to start using 'match' with React Router
  // TODO: Set up a basic 404-page to route to

  render() {
    return (
      <div>
        <Navbar />
        <main>
          <Switch>
            <Route exact path="/">
              <CountdownContainer
                showCompleted={this.state.showCompleted}
                name={this.state.listOfLists[0].name}
                items={this.state.listOfLists[0].items}
                addItem={this.addItem}
                completeItem={this.completeItem}
                removeItem={this.completeItem}
                toggleShowComplete={this.toggleShowComplete}
              />
            </Route>
            <Route path="/stats">
              <Stats />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route>
              <PageNotFound />
            </Route>
          </Switch>
        </main>
        <Footer />
      </div>
    )
  }
}

export default Main
