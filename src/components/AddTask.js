import React, { useState } from 'react';

function AddTask({ addNewTask }) {
  const [task, setTask] = useState({ title: '', description: '', date: '', email: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.title && task.description && task.date && task.email) {
      addNewTask(task);
      setTask({ title: '', description: '', date: '', email: '' });
    }
  };

  return (
    <div className="bg-white p-4 shadow rounded-lg">
      <h2 className="text-xl font-bold mb-4">Add New Task</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2">Task Title</label>
          <input
            type="text"
            className="w-full border p-2 rounded"
            value={task.title}
            onChange={(e) => setTask({ ...task, title: e.target.value })}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2">Description</label>
          <textarea
            className="w-full border p-2 rounded"
            value={task.description}
            onChange={(e) => setTask({ ...task, description: e.target.value })}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2">Email</label>
          <input
            type="email"
            className="w-full border p-2 rounded"
            value={task.email}
            onChange={(e) => setTask({ ...task, email: e.target.value })}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2">Date</label>
          <input
            type="date"
            className="w-full border p-2 rounded"
            value={task.date}
            onChange={(e) => setTask({ ...task, date: e.target.value })}
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Add Task
        </button>
      </form>
    </div>
  );
}

export default AddTask;
