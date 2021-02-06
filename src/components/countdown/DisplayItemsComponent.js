import React from 'react'

function DisplayItems(props) {
  function RenderItem(item) {
    if (!item.isComplete) {
      return <button>Function Item {item.id} | NOT Complete</button>
    } else if (props.showCompleted && item.isComplete) {
      return <button>Function Item {item.id} | Complete</button>
    }
  }

  return (
    <div>
      <h3>Display Items</h3>
      <p>{props.name}</p>

      {props.items.map((item) => RenderItem(item))}
    </div>
  )
}

export default DisplayItems
