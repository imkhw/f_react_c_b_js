import React, {useState, useEffect} from 'react'

const UseEffectCleanupFunction = () => {
    const [size, setSize] = useState(window.innerWidth)

    const checkSize = () => {
        setSize(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener('resize', checkSize)
        return () => {
            window.removeEventListener('resize', checkSize)
        }
    })

    return (
        <React.Fragment>
            <h4>useEffect Cleanup Function</h4>
            <div>{size} px</div>
        </React.Fragment>
    )
}

export default UseEffectCleanupFunction
