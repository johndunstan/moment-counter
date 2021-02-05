import React, { Component } from 'react'
import Navbar from './NavbarComponent'
import Footer from './FooterComponent'

class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dummyData: 'Hello World!',
      showCompleted: false,
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
        <Navbar />
        <Footer />
      </div>
    )
  }
}

export default Main
