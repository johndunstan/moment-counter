import React, { Component } from 'react'
import Navbar from './NavbarComponent'
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
            {
              id: 3,
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
  }

  render() {
    return (
      <div>
        <Navbar
          showCompleted={this.state.showCompleted}
          name={this.state.listOfLists[0].name}
          items={this.state.listOfLists[0].items}
        />
        <Footer />
      </div>
    )
  }
}

export default Main
