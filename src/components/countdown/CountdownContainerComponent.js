import React from 'react'
import Menubar from './MenubarComponent'
import DisplayItems from './DisplayItemsComponent'

function CountdownContainer(props) {
  return (
    <div>
      <h1>CountdownContainer!</h1>
      <Menubar showCompleted={props.showCompleted} />
      <DisplayItems name={props.name} />
    </div>
  )
}

export default CountdownContainer
