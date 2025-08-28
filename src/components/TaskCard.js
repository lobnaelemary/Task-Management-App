import React from 'react';
import { motion } from 'framer-motion';
import { FiEdit, FiTrash2, FiCheckCircle } from 'react-icons/fi';

const TaskCard = ({ task, editTask, deleteTask, toggleComplete }) => {
  const getCategoryColor = (category) => {
    switch (category) {
      case 'Work': return '#4f46e5';
      case 'Urgent': return '#dc2626';
      default: return '#059669';
    }
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Work': return '💼';
      case 'Urgent': return '🚨';
      default: return '🏠';
    }
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.3 }}
      className={`task-card ${task.completed ? 'completed' : ''}`}
    >
      <div className="task-header">
        <div className="category-badge" style={{ backgroundColor: getCategoryColor(task.category) }}>
          {getCategoryIcon(task.category)} {task.category}
        </div>
        <div className="task-actions">
          <button onClick={() => toggleComplete(task.id)} className="action-btn">
            <FiCheckCircle color={task.completed ? '#10b981' : '#aba223ff'} />
          </button>
          <button onClick={() => editTask(task)} className="action-btn">
            <FiEdit color="#3b82f6" />
          </button>
          <button onClick={() => deleteTask(task.id)} className="action-btn">
            <FiTrash2 color="#ef4444" />
          </button>
        </div>
      </div>
      <div className="task-content">
        <h3>{task.title}</h3>
        <p>{task.description}</p>
      </div>
      <div className="task-footer">
        <span className={`status ${task.completed ? 'completed' : 'pending'}`}>
          {task.completed ? 'completed' : 'pending'}
        </span>
      </div>
    </motion.div>
  );
};

export default TaskCard;