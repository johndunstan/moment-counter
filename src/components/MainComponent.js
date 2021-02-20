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
          id: this.idGenerator(),
          name: 'Items to Complete',
          items: [
            this.createNewItem(),
            this.createNewItem(),
            this.createNewItem(),
            this.createNewItem(),
            this.createNewItem(),
          ],
        },
      ],
    }
  }

  idGenerator = () => {
    //TODO: Investigate & implement better idGenerator function
    return Math.floor(Math.random() * 1000000000000 + 1)
  }

  createNewItem = () => {
    return {
      id: this.idGenerator(),
      isComplete: false,
      description: null,
      date: null,
      time: null,
      duration: null,
    }
  }

  addItem = () => {
    const newListOfLists = { ...this.state.listOfLists }
    const newItem = this.createNewItem()

    newListOfLists[0].items.push(newItem)
    this.setState({ listOfLists: newListOfLists })
  }

  subtractItem = () => {
    const newListOfLists = { ...this.state.listOfLists }
    newListOfLists[0].items.pop()

    this.setState({ listOfLists: newListOfLists })
  }

  changeTotal = (newTotal) => {
    const itemsToAdjust = newTotal - this.state.listOfLists[0].items.length
    const newListOfLists = { ...this.state.listOfLists }

    if (itemsToAdjust > 0) {
      for (let i = 0; i < itemsToAdjust; i++) {
        newListOfLists[0].items.push(this.createNewItem())
      }
    } else {
      for (let i = itemsToAdjust; i < 0; i++) {
        newListOfLists[0].items.pop()
      }
    }

    this.setState({ listOfLists: newListOfLists })
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

  resetState = () => {
    console.log('State reset!')

    const initialState = {
      showCompleted: false,
      listOfLists: [
        {
          id: this.idGenerator(),
          name: 'Items to Complete',
          items: [
            this.createNewItem(),
            this.createNewItem(),
            this.createNewItem(),
            this.createNewItem(),
            this.createNewItem(),
          ],
        },
      ],
    }

    this.setState(initialState)
  }

  toggleShowComplete = (showCompleted) => {
    this.setState({ showCompleted: !showCompleted })
  }

  // NOTE: When I start having multiple lists, I'll want to start using 'match' with React Router

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
                subtractItem={this.subtractItem}
                changeTotal={this.changeTotal}
                completeItem={this.completeItem}
                deleteItem={this.deleteItem}
                resetState={this.resetState}
                toggleShowComplete={this.toggleShowComplete}
              />
            </Route>
            <Route path="/stats">
              <Stats items={this.state.listOfLists[0].items} />
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
