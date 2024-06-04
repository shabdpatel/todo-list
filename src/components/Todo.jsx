import React from 'react'; // Import React
import { AiFillEdit } from 'react-icons/ai'; // Import edit icon from react-icons library
import { BsFillTrashFill } from 'react-icons/bs'; // Import trash icon from react-icons library

// The Todo component takes in props: task, deleteTodo, and editTodo
const Todo = ({ task, deleteTodo, editTodo }) => {
    return (
        // Container for each todo item with styling
        <div className='flex justify-between items-center bg-gray-700 text-white py-3 px-4 rounded-md mb-1 cursor-pointer'>
            {/* Display the task's text */}
            <p className='font-primary'>{task.task}</p>
            <div className='flex items-center gap-x-4'>
                {/* Edit icon which calls editTodo function with the task's ID when clicked */}
                <AiFillEdit className='text-xl' onClick={() => editTodo(task.id)} />
                {/* Trash icon which calls deleteTodo function with the task's ID when clicked */}
                <BsFillTrashFill className='text-xl' onClick={() => deleteTodo(task.id)} />
            </div>
        </div>
    )
}

export default Todo;
