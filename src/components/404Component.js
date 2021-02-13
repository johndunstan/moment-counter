import React from 'react'
import { Link } from 'react-router-dom'

function PageNotFound() {
  return (
    <>
      <h2>Page not found 🤦🏼‍♂️</h2>
      <p>
        <Link to="/">Return home</Link>
      </p>
    </>
  )
}

export default PageNotFound
