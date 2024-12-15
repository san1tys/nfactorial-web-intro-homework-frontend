import TaskItem from '../TaskItem/TaskItem';
import './TaskList.css';

const TaskList = ({
    tasks,
    onMoveToTrash,
    onDeleteForever,
    onMoveBackToTodo,
    onToggleTask,
    activeTab
}) => (
    <ul className="task-list">
        {tasks.map((task) => (
            <TaskItem
                key={task.id}
                task={task}
                onMoveToTrash={onMoveToTrash}
                onDeleteForever={onDeleteForever}
                onMoveBackToTodo={onMoveBackToTodo}
                onToggleTask={onToggleTask}
                activeTab={activeTab}
            />
        ))}
    </ul>
);

export default TaskList;
