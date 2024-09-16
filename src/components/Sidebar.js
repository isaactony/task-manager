import React from 'react';
import InboxIcon from '@mui/icons-material/Inbox';
import TodayIcon from '@mui/icons-material/Today';
import UpcomingIcon from '@mui/icons-material/Upcoming';
import LabelIcon from '@mui/icons-material/Label';

function Sidebar({ setView }) {
  return (
    <div className="w-64 bg-white border-r h-full">
      <div className="p-4 flex items-center space-x-4">
        {/* Circular space for profile picture */}
        <div className="w-12 h-12 rounded-full bg-gray-300 overflow-hidden">
          <img
            src="https://via.placeholder.com/150"
            alt="Profile"
            className="object-cover w-full h-full"
          />
        </div>
        {/* Display user name */}
        <div className="text-lg font-bold">Isaac Tonyloi</div>
      </div>
      <button
        className="mt-6 text-white bg-red-500 px-4 py-2 rounded-lg w-full"
        onClick={() => setView('addTask')}
      >
        Add Task
      </button>

      <div className="p-4">
        <ul className="space-y-4">
          {/* Inbox Section */}
          <li
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => setView('inbox')}
          >
            <InboxIcon className="text-gray-600" />
            <span>Inbox</span>
            <span className="ml-auto text-sm text-gray-600">15</span>
          </li>

          {/* Today Section */}
          <li className="flex items-center space-x-2 cursor-pointer">
            <TodayIcon className="text-gray-600" />
            <span>Today</span>
            <span className="ml-auto text-sm text-red-500">28</span>
          </li>

          {/* Upcoming Section */}
          <li className="flex items-center space-x-2 cursor-pointer">
            <UpcomingIcon className="text-gray-600" />
            <span>Upcoming</span>
          </li>

          {/* Filters & Labels Section */}
          <li className="flex items-center space-x-2 cursor-pointer">
            <LabelIcon className="text-gray-600" />
            <span>Filters & Labels</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
