import React from 'react';
import { MdCheck, MdDelete } from "react-icons/md";
import { useState } from 'react';

const Todolist = ({ todos }) => {
    const [completedTodos, setCompletedTodos] = useState([]);
    const [deletedTodos, setDeletedTodos] = useState([]);

    const handleDelete = (index) => {
        setDeletedTodos([...deletedTodos, index]);
    };

    const handleComplete = (index) => {
        setCompletedTodos([...completedTodos, index]);
    };

    return (
        <div>
            <ul>
                {todos.map((todo, index) => {
                    // Skip if this todo was deleted
                    if (deletedTodos.includes(index)) return null;
                    
                    const isCompleted = completedTodos.includes(index);
                    
                    return (
                        <li  key={index} style={{ textDecoration: isCompleted ? 'line-through' : 'none' }}>abhay
                            {todo} 
                           <span>                           <button onClick={() => handleComplete(index)}>
                                <MdCheck className='correct'/>
                            </button>
                            <button onClick={() => handleDelete(index)}>
                                <MdDelete  className='delete'/>
                            </button>
                           </span>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default Todolist;