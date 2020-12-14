import React, {useState, useEffect} from 'react'

const ShowHideComponent = () => {
    const [show, setShow] = useState(false)
    return (
        <React.Fragment>
            <h4>Show/Hide Component</h4>
            <button onClick={() => {
                setShow(!show)
            }}>Toggle</button>
            {show && <Item />}
        </React.Fragment>
    )
}

const Item = () => {
    const [size, setSize] = useState(window.innerWidth)
    const checkSize = () => {
        setSize(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener('resize', checkSize)
        return () => {
            window.removeEventListener('resize', checkSize)
        }
    }, [])

    return (
        <React.Fragment>
            <h4>Item</h4>
            <div>{size} px</div>
        </React.Fragment>
    )
}

export default ShowHideComponent
