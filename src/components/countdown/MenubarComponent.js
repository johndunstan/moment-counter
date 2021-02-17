import React from 'react'

function Menubar(props) {
  const completedItems = props.items.filter((item) => item.isComplete === true)
  const handleClick = (event) => {
    event.preventDefault()
    props.addItem()
  }

  const handleTotalChange = (event) => {
    event.preventDefault()
    props.changeTotal()
  }

  return (
    <div>
      <form>
        <label htmlFor="showComplete">Show Completed: </label>
        <input
          id="showComplete"
          type="checkbox"
          checked={props.showCompleted}
          onChange={() => {
            props.toggleShowComplete(props.showCompleted)
          }}
        />
        <label htmlFor="lengthValue"> | Total Items: </label>
        <input
          id="lengthValue"
          type="number"
          value={props.items.length}
          onChange={handleTotalChange}
        />
        <span> | Complete Items: {completedItems.length}</span>
        <span> ~ </span>
        <button onClick={handleClick}>+1</button>
      </form>
    </div>
  )
}

export default Menubar
