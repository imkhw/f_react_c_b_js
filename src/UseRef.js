import React, {useRef} from 'react'

const UseRef = () => {
    const refContainer = useRef(null)
    const divContainer = useRef(null)

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(refContainer.current.value)
        console.log(divContainer.current)
    }

    return (
        <React.Fragment>
            <h4>useRef</h4>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='name'>Name</label>
                    <input 
                        type='text'
                        ref={refContainer}
                    />
                </div>
                <button type='submit'>Add +</button>
            </form>
            <div ref={divContainer}>Learned useRef</div>
        </React.Fragment>
    )
}

export default UseRef
