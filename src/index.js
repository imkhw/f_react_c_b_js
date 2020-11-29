import React from 'react'
import ReactDom from 'react-dom'

const Greeting = () => {
    return (
        <div>
            Hello world!
        </div>
    )   
}

ReactDom.render(<Greeting />, document.getElementById('root'))