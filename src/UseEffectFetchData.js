import React, {useState, useEffect} from 'react'

const UseEffectFetchData = () => {
    const [users, setUsers] = useState([])

    // const url = 'https://api.github/users'
    const url = 'https://jsonplaceholder.typicode.com/users'

    const fetchGithubUsers = async () => {
        const res = await fetch(url)
        const data = await res.json()
        setUsers(data)   
    }

    useEffect(() => {
        fetchGithubUsers()
    }, [])

    return (
        <React.Fragment>
            <h4>useEffect Fetch Data</h4>
            <ul>
            {
                users.map((user) => {
                    // const {login, id, avatar_url, html_url} = user
                    const {id, name, email} = user
                    return (
                        // <li key={id}>
                        //     <div>{user.info}</div>
                        //     <div >{login}</div>
                        //     <a href={html_url}>
                        //         <img src={avatar_url} alt={login}></img>
                        //     </a>
                        // </li>
                        <li key={id}>
                            <div>{name}</div>
                            <div>{email}</div>
                        </li>
                    )
                })
            }
            </ul>
        </React.Fragment>
    )
}

export default UseEffectFetchData
