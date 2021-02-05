import React from 'react'

function Menubar(props) {
  return (
    <div>
      <h4>Menubar</h4>
      <p>Show Completed: {props.showCompleted ? 'True' : 'False'}</p>
    </div>
  )
}

export default Menubar
