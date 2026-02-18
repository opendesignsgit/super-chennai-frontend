import React from 'react';

const ModeSwitch = ({ mode, onChange }) => {
  return (
    <div className="mode-switch-container">
      <button
        className={`mode-switch-btn ${mode === 'ai' ? 'active' : ''}`}
        onClick={() => onChange('ai')}
      >
        AI
      </button>
      <button
        className={`mode-switch-btn ${mode === 'nearby' ? 'active' : ''}`}
        onClick={() => onChange('nearby')}
      >
        Nearby
      </button>
    </div>
  );
};

export default ModeSwitch;
