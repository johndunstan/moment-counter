import React from 'react'

function Menubar(props) {
  const completedItems = props.items.filter((item) => item.isComplete === true)

  return (
    <div>
      <form>
        <label htmlFor="showComplete">Show Completed: </label>
        <input
          id="showComplete"
          type="checkbox"
          checked={props.showCompleted}
        />
        <label htmlFor="lengthValue"> | Total Items: </label>
        <input id="lengthValue" type="number" value={props.items.length} />
        <span> | Complete Items: {completedItems.length}</span>
      </form>
    </div>
  )
}

export default Menubar
