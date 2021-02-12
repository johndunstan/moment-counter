import React, { Component } from 'react'
import { withRouter, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'

import Navbar from './NavbarComponent'
import CountdownContainer from './countdown/CountdownContainerComponent'
import Stats from './stats/StatsComponent'
import About from './about/AboutComponent'
import Footer from './FooterComponent'

const mapStateToProps = (state) => {
  return {
    showCompleted: state.showCompleted,
    listOfLists: state.listOfLists,
  }
}

class Main extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     showCompleted: true,
  //     listOfLists: [
  //       {
  //         id: 1,
  //         name: 'NuCamp Saturdays',
  //         items: [
  //           {
  //             id: 1,
  //             isComplete: true,
  //             description: null,
  //             date: null,
  //             time: null,
  //             duration: null,
  //           },
  //           {
  //             id: 2,
  //             isComplete: false,
  //             description: null,
  //             date: null,
  //             time: null,
  //             duration: null,
  //           },
  //           {
  //             id: 3,
  //             isComplete: true,
  //             description: null,
  //             date: null,
  //             time: null,
  //             duration: null,
  //           },
  //         ],
  //       },
  //     ],
  //   }
  // }

  render() {
    return (
      <main>
        <Navbar
          showCompleted={this.props.showCompleted}
          name={this.props.listOfLists[0].name}
          items={this.props.listOfLists[0].items}
        />
        <Switch>
          <Route exact path="/stats">
            <Stats />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
            <CountdownContainer
              showCompleted={this.props.showCompleted}
              name={this.props.listOfLists[0].name}
              items={this.props.listOfLists[0].items}
            />
          </Route>
          <Route path="*">
            <CountdownContainer
              showCompleted={this.props.showCompleted}
              name={this.props.listOfLists[0].name}
              items={this.props.listOfLists[0].items}
            />
          </Route>
        </Switch>
        <Footer />
      </main>
    )
  }
}

export default withRouter(connect(mapStateToProps)(Main))
