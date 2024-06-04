import React, { useState } from 'react'; // Import React and useState for managing state

// The Edit component takes in props: editTodo and task
const Edit = ({ editTodo, task }) => {
    // useState hook to manage the value of the input field
    const [value, setValue] = useState('');

    // Function to handle the form submission
    const handleSubmit = (e) => {
        e.preventDefault();  // Prevent the default form submission behavior (page reload)
        editTodo(value, task.id); // Call editTodo function with the new value and task ID
        setValue(''); // Reset the input field
    };

    return (
        // Form element with a submit handler
        <form className='mb-4 font-primary w-full' onSubmit={handleSubmit}>
            {/* Input field for updating the task */}
            <input
                type='text'
                className='outline-none bg-transparent border border-gray-500 p-4 w-[300px] text-white mb-8 rounded placeholder:text-gray-100'
                placeholder="Update Task"
                onChange={(e) => setValue(e.target.value)}
                value={value}
            />
            {/* Button to submit the form */}
            <button className='bg-gray-700 border-none p-2 text-white cursor-pointer rounded ml-2'>
                Update Task
            </button>
        </form>
    );
}

export default Edit;
