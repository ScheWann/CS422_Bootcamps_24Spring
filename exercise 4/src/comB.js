import React from 'react'

export default function ComB(props) {
    const { stateB, setStateA, setStateB } = props
    const onButtonClick = () => {
        setStateA(stateB)
    }
    const onResetButtonClick = () => {
        setStateB("B")
    }
    return (
        <div>
            {stateB}
            <button onClick={onButtonClick}>change A to B</button>
            <button onClick={onResetButtonClick}>Reset B</button>
        </div>
    )
}