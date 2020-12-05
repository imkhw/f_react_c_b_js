import React, {useState, useEffect} from 'react'

const UseEffectConditional = () => {
    const [value, setValue] = useState(0)
    
    useEffect(() => {
        if (value >= 1) {
            document.title = `(${value})useEffect`
        }
    })

    return (
        <React.Fragment>
            <h4>useEffect Conditional</h4>
            <div>{value}</div>
            <button type='submit' onClick={() => {
                setValue(value + 1)
            }}>+</button>
        </React.Fragment>
    )
}

export default UseEffectConditional
