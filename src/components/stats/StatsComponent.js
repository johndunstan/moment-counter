import React from 'react'

function Stats(props) {
  const completedItemsLength = props.items.filter(
    (item) => item.isComplete === true
  ).length

  const percentComplete = (complete, total) => {
    return Math.round((complete / total) * 100)
  }

  return (
    <div>
      <h1>Stats! 📊</h1>
      <div className="content-body">
        <h2>
          You have completed{' '}
          <span className="complete-span">{completedItemsLength}</span> out of{' '}
          <span className="total-span">{props.items.length}</span> items! That's{' '}
          <span className="percent-span">
            {percentComplete(completedItemsLength, props.items.length)}%
          </span>
          .
        </h2>
      </div>
    </div>
  )
}

export default Stats
