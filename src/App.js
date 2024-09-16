import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';

function App() {
  const [view, setView] = useState('inbox');
  const [tasks, setTasks] = useState([
    { title: 'Contract Finalization Meeting', description: 'Conduct a Zoom meeting...', date: '2024-07-04', email: 'sarah@example.com', favorite: false },
    // Add more tasks here
  ]);

  const addNewTask = (task) => {
    setTasks([...tasks, { ...task, favorite: false }]);
  };

  const toggleFavorite = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, favorite: !task.favorite } : task
    );
    setTasks(updatedTasks);
  };

  const showEmailDetails = (email) => {
    alert(`Email: ${email}`);
  };

  return (
    <div className="flex h-screen">
      {/* Passing setView as a prop */}
      <Sidebar setView={setView} />
      <div className="flex-1 p-6 bg-gray-100">
        <h1 className="text-2xl font-bold mb-6">Furze Smith Consulting</h1>
        {view === 'addTask' ? (
          <AddTask addNewTask={addNewTask} />
        ) : (
          <TaskList tasks={tasks} toggleFavorite={toggleFavorite} showEmailDetails={showEmailDetails} />
        )}
      </div>
    </div>
  );
}

export default App;
