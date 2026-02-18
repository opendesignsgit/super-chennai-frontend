import React, { useState } from 'react';
import ModeSwitch from './ModeSwitch';

const ChatInput = ({ mode, onModeChange, onSubmit, disabled }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim() && !disabled) {
      onSubmit(query);
      setQuery('');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      handleSubmit(e);
    }
  };

  return (
    <div className="chat-input-container">
      <form onSubmit={handleSubmit} className="chat-input-form">
        <div className="chat-input-wrapper">
          <input
            type="text"
            className="chat-input"
            placeholder="Ask Chennai anything..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            disabled={disabled}
          />
          <ModeSwitch mode={mode} onChange={onModeChange} />
        </div>
      </form>
    </div>
  );
};

export default ChatInput;
