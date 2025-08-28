import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TaskCard from './TaskCard';

const TaskList = ({ tasks, editTask, deleteTask, toggleComplete }) => {
  if (tasks.length === 0) {
    return (
      <div className="empty-state">
        <h3>No tasks available</h3>
        <p>Click on the "Add Task" button to start creating your first tasks</p>
      </div>
    );
  }

  return (
    <div className="task-list">
      <AnimatePresence>
        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            editTask={editTask}
            deleteTask={deleteTask}
            toggleComplete={toggleComplete}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};

export default TaskList;