import React, { useState, useEffect } from 'react';
import styles from './css/style.js';


const TaskManager = () => {
  const [tasks, setTasks] = useState(() => {
    // Initialize state with stored tasks
    const storedTasks = localStorage.getItem('tasks');
    return storedTasks ? JSON.parse(storedTasks) : [];
  });
  const [newTask, setNewTask] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState('');
  const [alert, setAlert] = useState({ show: false, message: '', type: '' });

  // Update localStorage whenever tasks change
  useEffect(() => {
    try {
      localStorage.setItem('tasks', JSON.stringify(tasks));
      console.log('Tasks saved:', tasks); // Debug log
    } catch (error) {
      console.error('Error saving to localStorage:', error);
      showAlert('Error saving tasks', 'error');
    }
  }, [tasks]);

  const showAlert = (message, type) => {
    setAlert({ show: true, message, type });
    setTimeout(() => setAlert({ show: false, message: '', type: '' }), 3000);
  };

  const handleAddTask = (e) => {
    e.preventDefault();
    if (!newTask.trim()) {
      showAlert('Please enter a task', 'error');
      return;
    }
    
    const task = {
      id: Date.now(),
      text: newTask.trim(),
      completed: false,
      createdAt: new Date().toISOString()
    };
    
    setTasks(prevTasks => [...prevTasks, task]);
    setNewTask('');
    showAlert('Task added successfully!', 'success');
  };

  const deleteTask = (id) => {
    setTasks(prevTasks => {
      const updatedTasks = prevTasks.filter(task => task.id !== id);
      return updatedTasks;
    });
    showAlert('Task deleted!', 'success');
  };

  const startEdit = (task) => {
    setEditingId(task.id);
    setEditText(task.text);
  };

  const saveEdit = (id) => {
    if (!editText.trim()) return;
    
    setTasks(prevTasks => 
      prevTasks.map(task => 
        task.id === id ? { ...task, text: editText.trim() } : task
      )
    );
    setEditingId(null);
    showAlert('Task updated!', 'success');
  };

  const toggleComplete = (id) => {
    setTasks(prevTasks => 
      prevTasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Debug helper function
  const checkLocalStorage = () => {
    const stored = localStorage.getItem('tasks');
    console.log('Current localStorage content:', stored);
  };

  // Rest of the component remains the same...
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <header style={styles.header}>
          <h1 style={styles.title}>Task Manager</h1>
        </header>

        <form onSubmit={handleAddTask} style={styles.form}>
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Add a new task..."
            style={styles.input}
          />
          <button type="submit" style={styles.button}>
            Add Task
          </button>
        </form>

        {alert.show && (
          <div style={{
            ...styles.alert,
            ...(alert.type === 'success' ? styles.successAlert : styles.errorAlert)
          }}>
            {alert.message}
          </div>
        )}

        <div style={styles.taskList}>
          {tasks.map(task => (
            <div key={task.id} style={styles.taskItem}>
              <button
                onClick={() => toggleComplete(task.id)}
                style={styles.iconButton}
              >
                {task.completed ? '✓' : '○'}
              </button>

              {editingId === task.id ? (
                <div style={styles.form}>
                  <input
                    type="text"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    style={styles.input}
                  />
                  <div style={styles.buttonGroup}>
                    <button onClick={() => saveEdit(task.id)} style={styles.button}>
                      Save
                    </button>
                    <button 
                      onClick={() => setEditingId(null)}
                      style={{...styles.button, backgroundColor: '#666'}}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  <span style={{
                    ...styles.taskText,
                    ...(task.completed ? styles.taskCompleted : {})
                  }}>
                    {task.text}
                  </span>
                  <div style={styles.buttonGroup}>
                    <button 
                      onClick={() => startEdit(task)} 
                      style={styles.iconButton}
                    >
                      ✎
                    </button>
                    <button 
                      onClick={() => deleteTask(task.id)} 
                      style={styles.iconButton}
                    >
                      ×
                    </button>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

        {tasks.length === 0 && (
          <div style={styles.emptyState}>
            No tasks yet. Add one to get started!
          </div>
        )}
      </div>
    </div>
  );
};


export default TaskManager;