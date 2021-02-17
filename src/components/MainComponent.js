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
      showCompleted: false,
      listOfLists: [
        {
          id: 1,
          name: 'Items to Complete',
          items: [
            {
              id: 0,
              isComplete: false,
              description: null,
              date: null,
              time: null,
              duration: null,
            },
            {
              id: 1,
              isComplete: false,
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
          ],
        },
      ],
    }
    this.addItem = this.addItem.bind(this)
    this.changeTotal = this.changeTotal.bind(this)
    this.completeItem = this.completeItem.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
    this.toggleShowComplete = this.toggleShowComplete.bind(this)
  }

  addItem = () => {
    const newItem = {
      // id: Math.floor(Math.random() * 10000000 + 1),
      id: this.state.listOfLists[0].items.length,
      isComplete: false,
      description: null,
      date: null,
      time: null,
      duration: null,
    }

    this.state.listOfLists[0].items.push(newItem)
    this.setState({ listOfLists: this.state.listOfLists })
  }

  changeTotal = (newTotal) => {
    console.log(`Total Changed!`)
  }

  completeItem = (id) => {
    this.setState(
      this.state.listOfLists[0].items.map((item) => {
        if (item.id === id) {
          item.isComplete = !item.isComplete
        }
        return item
      })
    )
  }

  deleteItem = () => {
    console.log('Item deleted')
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
                changeTotal={this.changeTotal}
                completeItem={this.completeItem}
                deleteItem={this.deleteItem}
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
