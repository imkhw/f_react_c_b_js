import React, {useState, useEffect} from 'react'

const UseEffectBasic = () => {
    const [value, setValue] = useState(0)

    useEffect(() => {
        document.title = `(${value})useEffect`
    })

    return (
        <React.Fragment>
            <h4>useEffect Basic</h4>
            <div>{value}</div>
            <button type='submit' onClick={() => {
                setValue(value + 1)
            }}>testing useEffect</button>
        </React.Fragment>
    )
}

export default UseEffectBasic
