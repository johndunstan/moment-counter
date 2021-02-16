import React from 'react'
import Menubar from './MenubarComponent'
import DisplayItems from './DisplayItemsComponent'

function CountdownContainer(props) {
  return (
    <div>
      <Menubar
        showCompleted={props.showCompleted}
        items={props.items}
        toggleShowComplete={props.toggleShowComplete}
      />
      <DisplayItems
        showCompleted={props.showCompleted}
        name={props.name}
        items={props.items}
      />
    </div>
  )
}

export default CountdownContainer
