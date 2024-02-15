import React from 'react'

export default function ComA(props) {
    const { stateA, setStateA, setStateB } = props
    const onButtonClick = () => {
        setStateB(stateA)
    }
    const onResetButtonClick = () => {
        setStateA("A")
    }
    return (
        <div>
            {stateA}
            <button onClick={onButtonClick}>Change B to A</button>
            <button onClick={onResetButtonClick}>Reset A</button>
        </div>
    )
}