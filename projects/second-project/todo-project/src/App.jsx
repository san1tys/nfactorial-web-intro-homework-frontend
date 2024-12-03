import React, { useEffect, useState } from 'react';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Tabs from './components/Tabs/Tabs';
import AddTaskButton from './components/AddTaskButton/AddTaksButton';
import Form from './components/Form/Form';
import TaskList from './components/TaskList/TaskList';

import './App.css';

function App() {
  const [tasks, setTasks] = useState(() => {
    const localValue = localStorage.getItem("ITEMS");
    if (localValue == null) {
      return [];
    }

    return JSON.parse(localValue)
  });

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(tasks))
  }, [tasks])

  const [activeTab, setActiveTab] = useState("To Do");
  const [activeForm, setActiveForm] = useState(false);
  const [formText, setFormText] = useState("");

  const handleAddTask = () => {
    if (formText.trim()) {
      const newTask = { id: Date.now(), text: formText, completed: false, inTrash: false };
      setTasks([...tasks, newTask]);
      setFormText("");
      setActiveForm(false);
    }
  };

  const handleToggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleMoveToTrash = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, inTrash: !task.inTrash } : task
      )
    );
  };

  const onAddTask = () => {
    setActiveForm(!activeForm);
  };

  return (
    <>
      <Header />
      <div className="container">
        <div className="wrapper">
          <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
          <AddTaskButton onAddTask={onAddTask} />
        </div>

        {activeForm && (
          <Form
            formText={formText}
            setFormText={setFormText}
            handleAddTask={handleAddTask}
          />
        )}

        <h1 className="activeTabTitle">{activeTab}</h1>
        <hr className="divider" />
        <TaskList
          tasks={tasks.filter((task) => {
            if (activeTab === "To Do") {
              return !task.inTrash
            } else if (activeTab === "Done") {
              return task.completed && !task.inTrash;
            } else if (activeTab === "Trash") {
              return task.inTrash;
            }
            return true;
          })}
          onMoveToTrash={handleMoveToTrash}
          onToggleTask={handleToggleTask}
        />
      </div>
      <Footer />
    </>
  );
}

export default App;
