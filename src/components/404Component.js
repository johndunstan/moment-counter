import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'

function PageNotFound() {
  return (
    <>
      <h1>Page Not Found 🤦🏼‍♂️</h1>
      <h2 className="content-body percent-span">
        <Link to="/">
          Return Home <FontAwesomeIcon icon={faHome} />
        </Link>
      </h2>
    </>
  )
}

export default PageNotFound
