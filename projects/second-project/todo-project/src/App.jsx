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
    return localValue ? JSON.parse(localValue) : [];
  });

  const [activeTab, setActiveTab] = useState("To Do");
  const [activeForm, setActiveForm] = useState(false);
  const [formText, setFormText] = useState("");

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(tasks));
  }, [tasks]);

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
        task.id === id ? { ...task, inTrash: true } : task
      )
    );
  };

  const handleRestoreTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, inTrash: false } : task
      )
    );
  };

  const handleDeleteForever = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const onAddTask = () => {
    setActiveForm(!activeForm);
  };

  const filteredTasks = tasks.filter((task) => {
    if (activeTab == "To Do") {
      return !task.inTrash;
    }
    if (activeTab == "Done") {
      return task.completed && !task.inTrash;
    }
    if (activeTab == "Trash") {
      return task.inTrash;
    }
    return true;
  });

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
        {filteredTasks.length === 0 ? (
          <p className="no-tasks">No tasks here</p>
        ) : (
          <TaskList
            tasks={filteredTasks}
            onMoveToTrash={handleMoveToTrash}
            onMoveBackToTodo={handleRestoreTask}
            onDeleteForever={handleDeleteForever}
            onToggleTask={handleToggleTask}
            activeTab={activeTab}
          />
        )}
      </div>
      <Footer />
    </>
  );
}

export default App;
