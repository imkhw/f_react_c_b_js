import React, {useState, useEffect} from 'react'

const MultipleReturns = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)
    const [user, setUser] = useState('default user')

    // const url = 'https://api.github.com/users/octocat'

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users/1')
            .then((res) => {
                if (res.status >= 200 && res.status <= 299) {
                    return res.json()
                } else {
                    setIsLoading(false)
                    setIsError(true)
                    throw new Error(res.statusText)
                }
            })
            .then((data) => {
                const {name} = data
                setUser(name)
                setIsLoading(false)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    if (isLoading) {
        return (
            <React.Fragment>
                <h4>Multiple returns Fetch Data</h4>
                <div>Loading...</div>      
            </React.Fragment>
        )
    }
    if (isError) {
        return (
            <React.Fragment>
                <h4>Multiple returns Fetch Data</h4>  
                <div>Error...</div>     
            </React.Fragment>
        )
    }
    return (
        <React.Fragment>
            <h4>Multiple returns Fetch Data</h4> 
            <div>{user}</div>      
        </React.Fragment>
    )
}

export default MultipleReturns
