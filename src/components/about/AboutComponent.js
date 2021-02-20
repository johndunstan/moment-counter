import React from 'react'

function About() {
  return (
    <div>
      <h1>About</h1>
      <div className="content-body">
        <h2>
          This app is a product by{' '}
          <span className="percent-span">
            <a
              href="https://www.linkedin.com/in/john-dunstan-235268185/"
              target="_blank"
            >
              John Dunstan
            </a>
          </span>{' '}
          for <span className="total-span">Nucamp</span>.
        </h2>
        <p>
          John likes to spend time with his family, ride mountain bikes, and
          code.
        </p>
      </div>
    </div>
  )
}

export default About
