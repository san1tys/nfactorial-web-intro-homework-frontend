import "./AddTaskButton.css"

const AddTaskButton = ({ onAddTask }) => (
    <button className="add-task-btn" onClick={onAddTask}>
        +
    </button>
);

export default AddTaskButton