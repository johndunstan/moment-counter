import React, { Component } from 'react'

class Menubar extends Component {
  constructor(props) {
    super(props)
    this.state = { value: this.props.items.length }
  }

  handleClick = (event) => {
    event.preventDefault()
    this.setState({ value: Number(this.state.value) + 1 })
    this.props.addItem()
  }

  handleTotalChange = (event) => {
    event.preventDefault()
    this.setState({ value: event.target.value })
  }

  handleBlur = (event) => {
    event.preventDefault()
    this.props.changeTotal(this.state.value)
  }

  render() {
    const completedItems = this.props.items.filter(
      (item) => item.isComplete === true
    )
    return (
      <div>
        <form>
          <label htmlFor="showComplete">Show Completed: </label>
          <input
            id="showComplete"
            type="checkbox"
            checked={this.props.showCompleted}
            onChange={() => {
              this.props.toggleShowComplete(this.props.showCompleted)
            }}
          />
          <label htmlFor="lengthValue"> | Total Items: </label>
          <input
            id="lengthValue"
            type="number"
            value={this.state.value}
            onChange={this.handleTotalChange}
            onBlur={this.handleBlur}
          />
          <span> | Complete Items: {completedItems.length}</span>
          <span> ~ </span>
          <button onClick={this.handleClick}>+1</button>
        </form>
      </div>
    )
  }
}

export default Menubar
