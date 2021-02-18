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

  // TODO: I'll want to do something like in my addItem function, but I'll
  // want to find the number of items to add then create those items and add to a
  // copy of state. Then set state to that copy.
  // (Likely also create a newItemGenerator() function to handle creating new items.)
  changeTotal = (newTotal) => {
    console.log(`Total Changed! ${newTotal}`)

    const itemsToAdjust = newTotal - this.state.listOfLists[0].items.length
    console.log(`Change items by ${itemsToAdjust} items! 🧮`)

    const newListOfLists = { ...this.state.listOfLists }
    let newItemsArry = []

    // Use an if statement to look at itemsToAdjust...
    if (itemsToAdjust > 0) {
      for (let i = 0; i < itemsToAdjust; i++) {
        newListOfLists[0].items.push(this.createNewItem())
        // newItemsArry.push(this.createNewItem())
      }
      // newListOfLists[0].items = [...newListOfLists[0], ...newItemsArry]
    } else {
      for (let i = itemsToAdjust; i < 0; i++) {
        newListOfLists[0].items.pop()
      }
    }

    // if itemsToAdjust is postive, add that number of items
    // if it's negative, remove that number of items
    // it it's zero, do nothing

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
