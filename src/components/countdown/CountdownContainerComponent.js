import React from 'react'
import Menubar from './MenubarComponent'
import DisplayItems from './DisplayItemsComponent'

function CountdownContainer(props) {
  return (
    <div>
      <Menubar
        showCompleted={props.showCompleted}
        items={props.items}
        name={props.name}
        toggleShowComplete={props.toggleShowComplete}
        addItem={props.addItem}
        subtractItem={props.subtractItem}
        changeTotal={props.changeTotal}
        resetState={props.resetState}
      />
      <DisplayItems
        showCompleted={props.showCompleted}
        completeItem={props.completeItem}
        items={props.items}
      />
    </div>
  )
}

export default CountdownContainer
