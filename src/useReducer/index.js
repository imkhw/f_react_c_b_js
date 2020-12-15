import React, {useState, useReducer} from 'react'

import Modal from './Modal'
import {data} from '../data'

const reducer = (state, action) => {
    if (action.type === 'ADD_TASK') {
        const newTodos = [...state.todos, action.payload]
        return {
            ...state,
            todos: newTodos,
            showModal: true,
            modalContent: 'Task is created!'
        }
    }
    if (action.type === 'REMOVE_TASK') {
        const newTodos = state.todos.filter((todo) => {
            return todo.id !== action.payload
        })
        return {
            ...state,
            todos: newTodos,
            showModal: true,
            modalContent: 'Task is removed!'
        }
    }
    if (action.type === 'NO_VALUE') {
        return {
            ...state,
            showModal: true,
            modalContent: 'Need to enter task!'
        }
    }
    if (action.type === 'HIDE_MODAL') {
        return {
            ...state,
            showModal: false
        }
    }
    throw new Error('Empty value')
}

const initialState = {
    todos: [],
    showModal: false,
    modalContent: 'Modal content'
}

const Index = () => {
    const [task, setTask] = useState('')

    const [state, dispatch] = useReducer(reducer, initialState)
    
    const handleSubmit = (e) => {
        e.preventDefault()
        
        if (task) {
            const newTask = {
                id: new Date().getTime().toString(),
                task
            }
            dispatch({
                type: 'ADD_TASK',
                payload: newTask
            })
            setTask('')
        } else {
            dispatch({
                type: 'NO_VALUE'
            })
        }
    }
    const hideModal = () => {
        dispatch({
            type: 'HIDE_MODAL'
        })
    }
    return (
        <React.Fragment>
            <h4>useReducer</h4>
            {
                state.showModal && 
                <Modal 
                    hideModal={hideModal} 
                    modalContent={state.modalContent} 
                />
            }
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='task'>Task: </label>
                    <input
                        type='text'
                        id='task'
                        name='task'
                        value={task}
                        onChange={(e) => {
                            setTask(e.target.value)
                        }}
                    />
                </div>
                <button type='submit'>Add +</button>
            </form>
            {
                state.todos.map((todo) => {
                    const {id, task} = todo
                    return (
                        <div key={id}>
                            {task}
                            <button onClick={() => {
                                dispatch({
                                    type: 'REMOVE_TASK',
                                    payload: id
                                })
                            }}>-</button>
                        </div>
                    )
                })
            }
        </React.Fragment>
    )
}

export default Index
