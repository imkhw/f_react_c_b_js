import React from 'react'

import MultipleReturns from './MultipleReturns'
import  CircuitEvaluation from './CircuitEvaluation'
import TernaryOperator from './TernaryOperator'
import ShowHideComponent from './ShowHideComponent'

const App = () => {
    return (
        <React.Fragment>
            <MultipleReturns />
            <hr />
            <CircuitEvaluation />
            <hr />
            <TernaryOperator />
            <hr />
            <ShowHideComponent />
            <hr />
        </React.Fragment>
    )
}

export default App
