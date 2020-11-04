import React from 'react'

const Details = (prop) => {
  return (
    // <h1>Details works</h1>
    <pre>
      <code>{JSON.stringify(prop, null, 4)}</code>
    </pre>
  )
}

export default Details