import React from 'react'

import UseEffectBasic from './UseEffectBasic'
import UseEffectConditional from './UseEffectConditional'
import UseEffectDependencyList from './UseEffectDependencyList'
import UseEffectCleanupFunction from './UseEffectCleanupFunction'
import UseEffectFetchData from './UseEffectFetchData'

const App = () => {
    return (
        <React.Fragment>
            <UseEffectBasic />
            <hr />
            <UseEffectConditional />
            <hr />
            <UseEffectDependencyList />
            <hr />
            <UseEffectCleanupFunction />
            <hr />
            <UseEffectFetchData />
        </React.Fragment>
    )
}

export default App
