import TaskItem from '../TaskItem/TaskItem';

import './TaskList.css'

const TaskList = ({ tasks, onMoveToTrash, onToggleTask }) => (
    <ul className="task-list">
        {tasks.map((task) => (
            <TaskItem
                key={task.id}
                task={task}
                onMoveToTrash={onMoveToTrash}
                onToggleTask={onToggleTask}
            />
        ))}
    </ul>
);

export default TaskList;