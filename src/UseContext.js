import React, {useState, useContext} from 'react'

import {data} from './data'

const TaskContext = React.createContext()

const UseContext = () => {
    const [todos, setTodos] = useState(data)

    const removeTask = (id) => {
        setTodos((currentTodos) => {
            return currentTodos.filter((todo) => {
                return todo.id !== id
            })
        })
    }
    
    return (
        <TaskContext.Provider value={{removeTask}}>
            <h4>useContext</h4>
            <Todos todos={todos} />
        </TaskContext.Provider>
    )
}

const Todos = ({todos}) => {
    return (
        <React.Fragment>
            <h4>Todos</h4>
            {
                todos.map((todo) => {
                    return (
                        <Task key={todo.id} {...todo} />   
                    )
                })
            }
        </React.Fragment>
    )
}

const Task = ({id, task}) => {
    const {removeTask} = useContext(TaskContext)
    return (
        <React.Fragment>
            <div>
                {task}
                <button onClick={() => removeTask(id)}>-</button>
            </div>
        </React.Fragment>
    )
}

export default UseContext
