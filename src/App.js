import React, { useState, useEffect } from 'react';
import { FiPlus } from 'react-icons/fi';
import TaskModal from './components/TaskModal';
import TaskList from './components/TaskList';
import FilterBar from './components/FilterBar';
import './styles/App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');
  const [showModal, setShowModal] = useState(false);
  const [editingTask, setEditingTask] = useState(null);

  // localStorage
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (savedTasks) {
      setTasks(savedTasks);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  // add and edit task
  const saveTask = (task) => {
    if (task.id && tasks.some(t => t.id === task.id)) {
      setTasks(tasks.map(t => t.id === task.id ? task : t));
    } else {
      const newTask = { ...task, id: Date.now() };
      setTasks([...tasks, newTask]);
    }
  };

  // delete task
  const deleteTask = (id) => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      setTasks(tasks.filter(task => task.id !== id));
    }
  };

  // toggle complete status
  const toggleComplete = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  // edit task
  const editTask = (task) => {
    setEditingTask(task);
    setShowModal(true);
  };

  // close modal
  const handleCloseModal = () => {
    setShowModal(false);
    setEditingTask(null);
  };

  // filter task 
  const filteredTasks = filter === 'all' 
    ? tasks 
    : tasks.filter(task => task.category === filter);

  return (
    <div className="app-container">
      <header className="app-header">
        <h1> Task Manager </h1>
        <p>Organize your tasks</p>
      </header>

      <div className="control-bar">
        <button className="add-btn" onClick={() => setShowModal(true)}>
          <FiPlus /> Add Task
        </button>
        <FilterBar currentFilter={filter} setFilter={setFilter} />
      </div>

      <TaskList 
        tasks={filteredTasks} 
        editTask={editTask}
        deleteTask={deleteTask}
        toggleComplete={toggleComplete}
      />

      <TaskModal 
        show={showModal}
        handleClose={handleCloseModal}
        task={editingTask}
        saveTask={saveTask}
      />
    </div>
  );
}

export default App;