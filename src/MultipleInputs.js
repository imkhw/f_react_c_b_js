import React, {useState} from 'react'

const MultipleInputs = () => {
    const [people, setPeople] = useState([])
    const [person, setPerson] = useState({
        name: '',
        email: '',
        age: ''
    })

    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setPerson({...person, [name]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (person.name && person.email &&  person.age) {
            const newPerson = {
                id: new Date().getTime().toString(),
                ...person
            }

            setPeople((currentPeople) => {
                return [...currentPeople, newPerson]
            })

            setPerson({
                name: '',
                email: '',
                age: ''
            })

        } else {
            console.log('empty values')
        }
    }
    
    return (
        <React.Fragment>
            <h4>Multiple inputs</h4>
            <form>
                <div>
                    <label htmlFor='name'>Name: </label>
                    <input 
                        type='text' 
                        id='name' 
                        name='name'
                        value={person.name}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label htmlFor='email'>Email: </label>
                    <input 
                        type='text' 
                        id='email' 
                        name='email' 
                        value={person.email}
                        onChange={handleChange} 
                    />
                </div>

                <div>
                    <label htmlFor='age'>Age: </label>
                    <input 
                        type='text' 
                        id='age' 
                        name='age' 
                        value={person.age}
                        onChange={handleChange} 
                    />
                </div>

                <button type='submit' onClick={handleSubmit}>Add +</button>
            </form>
            {
                people.map((person) => {
                    const {id, name, email, age} = person
                    return (
                        <div key={id}>{name} /{age} /{email}</div>
                    )
                })
            }
        </React.Fragment>
    )
}

export default MultipleInputs
