import './Form.css';

const Form = ({ formText, setFormText, handleAddTask }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        if (formText.trim()) {
            handleAddTask();
        }
    };

    return (
        <form className="form" onSubmit={handleSubmit}>
            <div className="inner-wrap">
                <h1 className="form-title">Add New To Do</h1>
                <textarea
                    placeholder="Your text"
                    value={formText}
                    onChange={(e) => setFormText(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter' && !e.shiftKey) {
                            e.preventDefault();
                            if (formText.trim()) {
                                handleAddTask();
                            }
                        }
                    }}
                />
                <button className="btn-add-item" type="submit">
                    Add
                </button>
            </div>
        </form>
    );
};

export default Form;
