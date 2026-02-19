import React, { useState } from "react";
import PropTypes from "prop-types";
import { Plus, Mic, Settings } from "lucide-react";
import "../../../assets/Css/ExplorePage.css";

/**
 * ChatInput Component - AI chat interface with mode switching
 * Supports both AI mode and Nearby mode
 */
const ChatInput = ({ 
  onSendMessage, 
  isNearbyActive, 
  onToggleNearby,
  disabled = false 
}) => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim() && !disabled) {
      onSendMessage(message);
      setMessage("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <div className="chat-input-container">
      <form onSubmit={handleSubmit} className="chat-input-form">
        <button
          type="button"
          className="chat-input-icon-btn"
          aria-label="Add attachment"
          disabled={disabled}
        >
          <Plus size={20} />
        </button>

        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ask Chennai anything..."
          className="chat-input-field"
          disabled={disabled}
        />

        <div className="chat-input-actions">
          <button
            type="button"
            className={`chat-mode-btn ${!isNearbyActive ? "active" : ""}`}
            onClick={() => !isNearbyActive && onToggleNearby()}
            disabled={!isNearbyActive}
          >
            AI
          </button>

          <button
            type="button"
            className={`chat-mode-btn ${isNearbyActive ? "active" : ""}`}
            onClick={onToggleNearby}
          >
            Nearby
          </button>

          <button
            type="button"
            className="chat-input-icon-btn"
            aria-label="Voice input"
            disabled={disabled}
          >
            <Mic size={20} />
          </button>

          <button
            type="button"
            className="chat-input-icon-btn settings-btn"
            aria-label="Settings"
            disabled={disabled}
          >
            <Settings size={20} />
          </button>
        </div>
      </form>
    </div>
  );
};

ChatInput.propTypes = {
  onSendMessage: PropTypes.func.isRequired,
  isNearbyActive: PropTypes.bool.isRequired,
  onToggleNearby: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

export default ChatInput;
