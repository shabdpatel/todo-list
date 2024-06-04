import React, { useState } from 'react'; // Import React and useState for managing state
import Form from './Form'; // Import the Form component
import { v4 as uuidv4 } from 'uuid'; // Import the UUID library to generate unique IDs
import Todo from './Todo'; // Import the Todo component
import Edit from './Edit'; // Import the Edit component

// This function initializes uuidv4
uuidv4();

const TodoList = () => {
    // useState hook to manage the state of todos
    const [todoValue, setTodo] = useState([]);

    // Function to create a new todo item
    const createTodo = todo => {
        // Adds a new todo to the state with a unique ID and sets isEditing to false
        setTodo([...todoValue, { id: uuidv4(), task: todo, isEditing: false }]);
    };

    // Function to delete a todo item by its ID
    const deleteTodo = id => {
        // Filters out the todo with the matching ID and updates the state
        setTodo(todoValue.filter(todo => todo.id !== id));
    };

    // Function to toggle the editing state of a todo item
    const editTodo = id => {
        // Maps through todos and toggles isEditing for the todo with the matching ID
        setTodo(todoValue.map(todo => todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo));
    };

    // Function to update the task of a todo item
    const editTask = (task, id) => {
        // Maps through todos, updates the task and toggles isEditing for the todo with the matching ID
        setTodo(todoValue.map(todo => todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo));
    };

    return (
        <div className='container bg-gray-900 mt-20 p-8 rounded-md'>
            {/* Render the Form component, passing createTodo as a prop */}
            <Form createTodo={createTodo} />
            {
                // Map through todoValue to render each todo item
                todoValue.map((todo, idx) => (
                    // If the todo is in editing state, render the Edit component
                    todo.isEditing ? (
                        <Edit key={idx} editTodo={editTask} task={todo} />
                    ) : (
                        // If the todo is not in editing state, render the Todo component
                        <Todo task={todo} key={idx} deleteTodo={deleteTodo} editTodo={editTodo} />
                    )
                ))
            }
        </div>
    );
};

export default TodoList;
