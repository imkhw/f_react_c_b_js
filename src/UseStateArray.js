import React from 'react'

import {data} from './data'

const UseStateArray = () => {
    const [people, setPeople] = React.useState(data)
    console.log(people)

    const clearName = (id) => {
        let newPeople = people.filter((person) => {
            return person.id !== id 
        }) 
        setPeople(newPeople)
    }
    return (
        <React.Fragment>
            <h4>useState Array</h4>
            {people.map((person) => {
                const {id, name} = person
                return (
                    <div key={id}>
                        {name}
                        <button type='submit' onClick={() => {
                            clearName(id)
                        }}>x</button>
                    </div>
                )
            })}
            <button type='submit' onClick={() => {
                setPeople([])
            }}>
                Clear all names
            </button>
        </React.Fragment>
    )
}

export default UseStateArray
