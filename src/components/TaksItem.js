import React from 'react';

function TaskItem({ task, toggleFavorite, showEmailDetails }) {
  return (
    <li className="py-4 border-b">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="font-semibold text-gray-800">{task.title}</h3>
          <p className="text-gray-600 text-sm">{task.description}</p>
          <button
            className="text-blue-500"
            onClick={showEmailDetails}
          >
            Show Email
          </button>
        </div>
        <div className="flex items-center">
          <span className="text-sm text-red-600">{task.date}</span>
          <button
            className={`ml-4 ${task.favorite ? 'text-yellow-500' : 'text-gray-400'}`}
            onClick={toggleFavorite}
          >
            ★
          </button>
        </div>
      </div>
    </li>
  );
}

export default TaskItem;
