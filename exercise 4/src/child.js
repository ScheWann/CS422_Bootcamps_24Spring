import React from 'react'

export default function Child(props) {
  const { state,setState } = props
  const onButtonClick = () => {
    setState('Okay, the child is here')
  }
  return (
    <div>
        { state }
        <button onClick={onButtonClick}>Okay,the child is here</button>
    </div>
  )
}