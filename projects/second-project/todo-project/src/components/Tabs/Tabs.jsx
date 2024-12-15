import "./Tabs.css"

const Tabs = ({ activeTab, setActiveTab }) => (

    <div className="tabs">
        {["To Do", "Done", "Trash"].map((tab) => (
            <button
                key={tab}
                className={activeTab === tab ? "active" : ""}
                onClick={() => setActiveTab(tab)}
            >
                {tab}
            </button>
        ))}
    </div>

);

export default Tabs;