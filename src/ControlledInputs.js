import React, {useState, useEffect} from 'react'

const ControlledInputs = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [people, setPeople] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault()
        if (name && email) {
            const person = {
                id: new Date().getTime().toString(),
                name,
                email
            }
            setPeople((currentPeople) => {
                 return [...currentPeople, person]
            })
            setName('')
            setEmail('')
        } else {
            console.log('empty values...')
        }
    }
    
    return (
        <React.Fragment>
            <h4>Controlled inputs</h4>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='name'>Name: </label>
                    <input 
                        type='text' 
                        id='name' 
                        name='name'
                        value={name}
                        onChange={(e) => {
                            setName(e.target.value)
                        }}
                    />
                </div>

                <div>
                    <label htmlFor='email'>Email: </label>
                    <input 
                        type='text' 
                        id='email' 
                        name='email' 
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value)
                        }} 
                    />
                </div>

                <button type='submit'>Add +</button>
            </form>
            {
                people.map((person) => {
                    const {id, name, email} = person
                    return (
                        <div key={id}>{name} / {email}</div>
                    )
                })
            }
        </React.Fragment>
    )
}

export default ControlledInputs
