import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus, faRedo } from '@fortawesome/free-solid-svg-icons'

class Menubar extends Component {
  constructor(props) {
    super(props)
    this.state = { value: this.props.items.length }
  }

  handleClickPlusOne = (event) => {
    event.preventDefault()
    this.setState({ value: Number(this.state.value) + 1 })
    this.props.addItem()
  }

  handleClickMinusOne = (event) => {
    event.preventDefault()
    this.setState({ value: Number(this.state.value) - 1 })
    this.props.subtractItem()
  }

  handleClickReset = (event) => {
    event.preventDefault()
    // TODO: Figure out a better way to reset value
    this.setState({ value: 5 })
    this.props.resetState()
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
      <form>
        <div className="menu-bar">
          <div>
            <input
              id="showComplete"
              className="form-field"
              type="checkbox"
              checked={this.props.showCompleted}
              onChange={() => {
                this.props.toggleShowComplete(this.props.showCompleted)
              }}
            />
            <label htmlFor="showComplete"> Show Completed</label>
          </div>
          <h1>{this.props.name}</h1>
          <div className="form-right">
            <label htmlFor="lengthValue">Total Items: </label>
            <input
              id="lengthValue"
              className="form-field"
              type="number"
              value={this.state.value}
              onChange={this.handleTotalChange}
              onBlur={this.handleBlur}
            />
            <div>
              Complete Items:{' '}
              <span className="complete-total">{completedItems.length}</span>
            </div>
            <button onClick={this.handleClickMinusOne}>
              <FontAwesomeIcon icon={faMinus} />
            </button>
            <button onClick={this.handleClickPlusOne}>
              <FontAwesomeIcon icon={faPlus} />
            </button>
            <button onClick={this.handleClickReset}>
              <FontAwesomeIcon icon={faRedo} />
            </button>
          </div>
        </div>
      </form>
    )
  }
}

export default Menubar
