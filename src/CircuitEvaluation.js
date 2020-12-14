import React, {useState} from 'react'

const CircuitEvaluation = () => {
    const [text, setText] = useState('')

    return (
        <React.Fragment>
            <h4>Circuit Evaluation</h4>
            <div>{text || 'It is || working'}</div>
            {text && <div>It is && working</div>}
        </React.Fragment>
    )
}

export default CircuitEvaluation
