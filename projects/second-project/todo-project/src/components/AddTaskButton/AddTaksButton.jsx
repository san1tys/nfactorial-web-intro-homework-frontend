import "./AddTaskButton.css"

const AddTaskButton = ({ onAddTask }) => (
    <button className="add-task-btn" onClick={onAddTask}>
        <span>+</span>
    </button>
);

export default AddTaskButton