import React from 'react'
import Menubar from './MenubarComponent'
import DisplayItems from './DisplayItemsComponent'

function CountdownContainer(props) {
  return (
    <div>
      <h1>CountdownContainer!</h1>
      <Menubar showCompleted={props.showCompleted} items={props.items} />
      <DisplayItems
        showCompleted={props.showCompleted}
        name={props.name}
        items={props.items}
      />
    </div>
  )
}

export default CountdownContainer
