import React, {useState} from 'react'

const UseStateCounter = () => {
    const [initialValue, setinitialValue] = useState(0)
    return (
        <React.Fragment>
            <h4>useState Counter</h4>
            <div>{initialValue}</div>
            <button type='submit' onClick={() => {
                setinitialValue(initialValue + 1)
            }}>+</button>

            <button type='submit' onClick={() => {
                setinitialValue(0)
            }}>reset</button>

            <button type='submit' onClick={() => {
                setinitialValue(initialValue - 1)
            }}>-</button>

            <h4>useState complex Counter</h4>
            <div>{initialValue}</div>
            <button type='submit' onClick={() => {
                setTimeout(() => {
                    setinitialValue((prevInitialValue) => {
                        return prevInitialValue + 1
                    })
                }, 3000)
            }}>+</button>

            <button type='submit' onClick={() => {
                setinitialValue(0)
            }}>reset</button>

            <button type='submit' onClick={() => {
                setinitialValue(initialValue - 1)
            }}>-</button>

        </React.Fragment>
    )
}

export default UseStateCounter
