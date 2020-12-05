import React, {useState, useEffect} from 'react'

const UseEffectDependencyList = () => {
    const [value, setValue] = useState(0)

    useEffect(() => {
        if (value >= 1) {
            document.title = `(${value})useEffect`
        }
    }, [value])

    return (
        <React.Fragment>
            <h4>useEffect Dependency List</h4>
            <div>{value}</div>
            <button type='submit' onClick={() => {
                setValue(value + 1)
            }}>testing useEffect</button>
        </React.Fragment>
    )
}

export default UseEffectDependencyList
