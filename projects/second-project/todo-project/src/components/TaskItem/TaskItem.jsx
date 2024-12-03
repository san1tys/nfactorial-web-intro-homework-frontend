import './TaskItem.css'

import { FaTrash } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import { AiOutlineCheck } from "react-icons/ai";
import { useState } from 'react';

const TaskItem = ({ task, onMoveToTrash, onToggleTask }) => {

    const [isOptionsVisible, setOptionsVisible] = useState(false)

    function toggleOptions() {
        setOptionsVisible(!isOptionsVisible)
    }

    return (
        <>
            <li key={task.id} className={`task-item ${task.completed ? "completed" : ""}`}>
                <button onClick={toggleOptions} className='btn-bs'><BsThreeDotsVertical /></button>
                <label className="checkbox-container">
                    <input
                        type="checkbox"
                        checked={task.completed}
                        onChange={() => onToggleTask(task.id)}

                    />
                    <span className="checkmark">
                        {task.completed && <AiOutlineCheck className="check-icon" />}
                    </span>
                </label>
                <span className={task.completed ? 'completed-text' : ''}>{task.text}</span>

            </li>
            {isOptionsVisible && (<button className="btn-trash" onClick={() => onMoveToTrash(task.id)}><FaTrash style={{}} />Move to Trash</button>)}
        </>
    )
}



export default TaskItem;