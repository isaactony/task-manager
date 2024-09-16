import React, { useState } from 'react';
import TaskItem from './TaksItem';

const tasks = [
  {
    title: 'Contract Finalization Meeting',
    description: 'Conduct a Zoom meeting with Sarah Johnson to finalize the contract and discuss the initial steps of the engagement.',
    date: 'Jul 4',
  },
  {
    title: 'Send Signed Contract',
    description: 'Email the signed contract to Sarah Johnson for her signature and return.',
    date: 'Jul 6',
  },
  {
    title: 'Initial Assessment and Goal Setting Meeting',
    description: 'Conduct a Zoom meeting with Evergreen High School’s leadership team for initial assessment and goal setting.',
    date: 'Jul 8',
  },
  {
    title: 'Send Follow-up and Meeting Minutes',
    description: 'Email Sarah Johnson with the key points and minutes from the initial assessment meeting.',
    date: 'Jul 9',
  },
  {
    title: 'Workshop 1 - Introduction to Generative AI',
    description: 'Conduct the first workshop covering an overview of generative AI, its applications in education, and ethical considerations.',
    date: 'Jul 22',
  },
];


function TaskList({ tasks, toggleFavorite, showEmailDetails }) {
  return (
    <div className="bg-white p-4 shadow rounded-lg">
      <h2 className="text-xl font-bold mb-4">Example School Project</h2>
      <ul>
        {tasks.map((task, index) => (
          <TaskItem
            key={index}
            task={task}
            toggleFavorite={() => toggleFavorite(index)}
            showEmailDetails={() => showEmailDetails(task.email)}
          />
        ))}
      </ul>
    </div>
  );
}

export default TaskList;

