import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import {data} from '../data'

const Team = () => {
    const [teammates, setTeammates] = useState(data)

    return (
        <div>
            Team page
            {
                teammates.map((teammate) => {
                    const {id, name} = teammate
                    return (
                        <div key={id}>
                            <Link to={`/teammates/${id}`}>{name}</Link>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Team
