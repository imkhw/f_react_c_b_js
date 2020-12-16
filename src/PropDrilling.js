import React, {useState} from 'react'

import {data} from './data'

const PropDrilling = () => {
    const [todos, setTodos] = useState(data)

    const removeTask = (id) => {
        setTodos((currentTodos) => {
            return currentTodos.filter((todo) => {
                return todo.id !== id
            })
        })
    }
    
    return (
        <React.Fragment>
            <h4>Prop Drilling</h4>
            <Todos todos={todos} removeTask={removeTask} />
        </React.Fragment>
    )
}

const Todos = ({todos, removeTask}) => {
    return (
        <React.Fragment>
            <h4>Todos</h4>
            {
                todos.map((todo) => {
                    return (
                        <Task key={todo.id} {...todo} removeTask={removeTask} />   
                    )
                })
            }
        </React.Fragment>
    )
}

const Task = ({id, task, removeTask}) => {
    return (
        <React.Fragment>
            <div>
                {task}
                <button onClick={() => removeTask(id)}>-</button>
            </div>
        </React.Fragment>
    )
}

export default PropDrilling
