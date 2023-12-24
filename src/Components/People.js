import React from 'react';
import './shared/styles/skeleton.css'

export default function People() {
  return (
    <div className="bg-white px-4 pt-3 pb-4 rounded-[20px] border border-gray-200 flex-1">
      <strong className="text-gray-700 font-large">People</strong>
      <div className="border-x border-gray-200 rounded-sm mt-3">
        {/* Skeletons */}
        <div className="skeleton-container">
          <div className="skeleton-photo"></div>
          <div className="skeleton-text"></div>
        </div>
        <div className="skeleton-container">
          <div className="skeleton-photo"></div>
          <div className="skeleton-text"></div>
        </div>
        <div className="skeleton-container">
          <div className="skeleton-photo"></div>
          <div className="skeleton-text"></div>
        </div>
        {/* End Skeletons */}
		<button className="bg-violet-500 text-white px-4 py-2 rounded-[10px] mt-3 hover:cursor-pointer hover:bg-violet-400">
          Invite Collaborators
        </button>
      </div>
    </div>
  );
}
