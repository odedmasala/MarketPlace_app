import React from 'react'

export default function AmountButton({button, setCount}) {
  return (
    <button onClick={setCount} className='button text-base mx-2'>
      {button}
    </button>
  )
}
