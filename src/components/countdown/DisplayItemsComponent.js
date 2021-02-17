import React from 'react'

function DisplayItems(props) {
  function RenderItem(item) {
    if (!item.isComplete) {
      return (
        <button
          key={item.id}
          onClick={() => {
            props.completeItem(item.id)
          }}
        >
          NOT Complete
        </button>
      )
    } else if (props.showCompleted && item.isComplete) {
      return (
        <button
          key={item.id}
          onClick={() => {
            props.completeItem(item.id)
          }}
        >
          Complete
        </button>
      )
    }
  }

  return (
    <>
      <h1>{props.name}</h1>
      {props.items.map((item) => RenderItem(item))}
    </>
  )
}

export default DisplayItems
