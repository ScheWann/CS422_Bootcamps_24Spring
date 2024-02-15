import React, { useState } from 'react'
import ComA from './comA';
import ComB from './comB';

export default function ParentChildChild() {
    // parent component use to compnent management
    const [stateA, setStateA] = useState("A");
    const [stateB, setStateB] = useState("B");

    return (
        <div>
            <ComA stateA={stateA} setStateB={setStateB} setStateA={setStateA}/>
            <ComB stateB={stateB} setStateA={setStateA} setStateB={setStateB}/>
        </div>
    )
}