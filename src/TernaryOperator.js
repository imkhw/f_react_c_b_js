import React, { useState } from 'react'

const TernaryOperator = () => {
    const [text, setText] = useState(1)

    return (
        <React.Fragment>
            <h4>Ternary Operator</h4>
            { text ? (
                <div>It is working</div>
            ) : (
                <div>It is not working</div>
            )}
        </React.Fragment>
    )
}

export default TernaryOperator
