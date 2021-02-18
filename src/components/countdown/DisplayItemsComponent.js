import React from 'react'

function DisplayItems(props) {
  function RenderItem(item) {
    if (!item.isComplete) {
      return (
        <div
          key={item.id}
          onClick={() => {
            props.completeItem(item.id)
          }}
          className="circle"
        ></div>
      )
    } else if (props.showCompleted && item.isComplete) {
      return (
        <div
          key={item.id}
          onClick={() => {
            props.completeItem(item.id)
          }}
          className="circle complete"
        >
          <p>(complete)</p>
        </div>
      )
    }
  }

  return (
    <>
      <h1>{props.name}</h1>
      <div className="display-container">
        {props.items.map((item) => RenderItem(item))}
      </div>
    </>
  )
}

export default DisplayItems
