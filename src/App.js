import React from 'react'

import ControlledInputs from './ControlledInputs'
import MultipleInputs from './MultipleInputs'

const App = () => {
    return (
        <React.Fragment>
            <ControlledInputs />
            <hr />
            <MultipleInputs />
            <hr />
        </React.Fragment>
    )
}

export default App
