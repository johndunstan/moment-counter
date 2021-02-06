import React from 'react'

function Menubar(props) {
  // TO DO: Add a reduce function to line 18 to show number of completed items
  // I think I'm on the right track - I just need to figure out my reduce function
  const reducer = (acc, cur) => acc + (cur.isComplete ? 1 : 0)
  console.log(`Total Complete: ${props.items.reduce(reducer)}`)

  console.log(
    `Item 1 Complete: ${props.items[0].isComplete ? 'true' : 'false'}`
  )

  console.log(`${props.items.map((item) => item.isComplete)}`)

  return (
    <div>
      <h4>Menubar</h4>
      <form>
        <label for="showComplete">Show Completed: </label>
        <input
          id="showComplete"
          type="checkbox"
          checked={props.showCompleted}
        />
        <label> | Total Items: </label>
        <input type="number" value={props.items.length} />
        <span> | Complete Items: {}</span>
      </form>
    </div>
  )
}

export default Menubar
