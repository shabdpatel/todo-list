import React, { useState } from 'react'
import Form from './Form'
import { v4 as uuidv4 } from 'uuid'

const TodoList = () => {
    const [todoValue, setTodo] = useState([]);

    const createTodo = todo => {
        setTodo([...todoValue, { id: uuidv4(), task: todo, isEditing: false }])
    }

    return (
        <div className='container bg-gray-900 mt-20 p-8 rounded-md'>
            <Form createTodo={createTodo} />
        </div>
    )
}

export default TodoList
