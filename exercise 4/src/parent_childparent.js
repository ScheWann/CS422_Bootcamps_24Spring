import React from 'react'
import { useState } from 'react'
import Child from './child.js'

export default function ParentChildParent() {
    const [state,setState] = useState('state')

    return (
        <div>
            <Child state={state} setState={setState}></Child>
        </div>
    )
}