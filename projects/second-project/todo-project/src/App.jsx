import React from 'react';
import { useState } from 'react';

import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Tabs from './components/Tabs/Tabs';
import AddTaskButton from './components/AddTaskButton/AddTaksButton';

import './App.css'

function App() {

  const [activeTab, setActiveTab] = useState("To Do");


  return (
    <>
      <Header />
      <div className="container">
        <div className="wrapper">
          <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
          <AddTaskButton />
        </div>
      </div>
      <Footer />
    </>

  )
}

export default App
