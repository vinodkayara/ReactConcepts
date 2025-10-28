import React from 'react'

function Child({click}) {
  return (
    <div>
        <h4>Child Component</h4>
        <button onClick={click}>Ckick here </button>
    </div>
  )
}

export default Child