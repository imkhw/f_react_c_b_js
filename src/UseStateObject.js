import React, {useState} from 'react'

const UseStateObject = () => {
    const [person, setPerson] = useState({
        name: 'zak',
        age: 20,
        position: 'developer'
    })
    
    const handleClick = () => {
        setPerson({
            ...person,
            position: 'mern developer'
        })
    }

    return (
        <React.Fragment>
            <h4>useState Object</h4>
            <div>{person.name}</div>
            <div>{person.age}</div>
            <div>{person.position}</div>
            <button type='submit' onClick={handleClick}>Change position</button>
        </React.Fragment>
    )
}

export default UseStateObject
