import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'

import {data} from '../data'

const Teammates = () => {
    const {id} = useParams()

    const [name, setName] = useState('Default name')

    useEffect(() => {
        const chooseTeammate = data.find((teammate) => {
            return teammate.id === parseInt(id)
        })
        setName(chooseTeammate.name)
    }, [])

    return (
        <div>
            {name}
        </div>
    )
}

export default Teammates
