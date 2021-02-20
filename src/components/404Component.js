import React from 'react'
import { Link } from 'react-router-dom'

function PageNotFound() {
  return (
    <>
      <h1>Page not found 🤦🏼‍♂️</h1>
      <h2>
        <Link to="/">Return home</Link>
      </h2>
    </>
  )
}

export default PageNotFound
