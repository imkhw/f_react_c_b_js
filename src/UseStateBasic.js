import React, {useState} from 'react'

const UseStateBasic = () => {
    const [sample, setSample] = useState("Let's call this title, right")
    const handleClick = () => {
        if (sample === "Let's call this title, right") {
            setSample('What do you want to change?')
        } else {
            setSample("Let's call this title, right")
        }
    }
    return (
        <React.Fragment>
            <h4>useState Basic</h4>
            <p>{sample}</p>
            <button type='submit' onClick={handleClick}>Change that title</button>
        </React.Fragment>
    )
}

export default UseStateBasic
