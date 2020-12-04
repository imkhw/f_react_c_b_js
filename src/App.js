import React from 'react'

import UseStateBasic from './UseStateBasic'
import UseStateArray from './UseStateArray'
import UseStateObject from './UseStateObject'
import UseStateCounter from './UseStateCounter'

const App = () => {
    return (
        <React.Fragment>
            <UseStateBasic />
            <hr></hr>
            <UseStateArray />
            <hr></hr>
            <UseStateObject />
            <hr></hr>
            <UseStateCounter />
        </React.Fragment>
    )
}

export default App
