import { useState, useEffect } from "react";
import { capitalizeFirstLetter } from "../utils/helpers";

export default function ChatInput({ mode, onSendMessage, onModeSwitch, categories = [], selectedCategory, onCategoryClick }) {
  const [inputValue, setInputValue] = useState("");
  const [isListening, setIsListening] = useState(false);
  const [recognition, setRecognition] = useState(null);

  // Initialize speech recognition
  useEffect(() => {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      const recognitionInstance = new SpeechRecognition();
      
      recognitionInstance.continuous = false;
      recognitionInstance.interimResults = false;
      recognitionInstance.lang = 'en-US';

      recognitionInstance.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setInputValue(transcript);
        setIsListening(false);
        // Auto-submit after voice input
        setTimeout(() => {
          if (transcript.trim()) {
            onSendMessage(transcript);
            setInputValue("");
          }
        }, 100);
      };

      recognitionInstance.onerror = (event) => {
        console.error('Speech recognition error:', event.error);
        setIsListening(false);
      };

      recognitionInstance.onend = () => {
        setIsListening(false);
      };

      setRecognition(recognitionInstance);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() && mode === "ai") {
      onSendMessage(inputValue);
      setInputValue("");
    }
  };

  const handleVoiceClick = () => {
    if (mode === "nearby") return; // Disable voice in Nearby mode
    
    if (!recognition) {
      alert('Speech recognition is not supported in your browser. Please try Chrome or Edge.');
      return;
    }

    if (isListening) {
      recognition.stop();
      setIsListening(false);
    } else {
      recognition.start();
      setIsListening(true);
    }
  };

  return (
    <div className="chat-input-container">
      {/* Category chips for Nearby mode */}
      {mode === "nearby" && categories.length > 0 && (
        <div className="category-chips-container">
          <div className="category-chips">
            {categories.map((category) => (
              <button
                key={category}
                className={`category-chip ${selectedCategory === category ? "active" : ""}`}
                onClick={() => onCategoryClick(category)}
              >
                {capitalizeFirstLetter(category)}
              </button>
            ))}
          </div>
        </div>
      )}

      <form className="chat-input-form" onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <button 
            type="button" 
            className="input-icon-btn" 
            title="Add"
            disabled={mode === "nearby"}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
          </button>

          <input
            type="text"
            className="chat-input"
            placeholder={mode === "nearby" ? "Chat disabled in Nearby mode" : "Ask Chennai anything..."}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            disabled={mode === "nearby"}
          />

          <div className="mode-switch">
            <button
              type="button"
              className={`mode-btn ${mode === "ai" ? "active" : ""}`}
              onClick={() => onModeSwitch("ai")}
            >
              AI
            </button>
            <button
              type="button"
              className={`mode-btn ${mode === "nearby" ? "active" : ""}`}
              onClick={() => onModeSwitch("nearby")}
            >
              Nearby
            </button>
          </div>

          <button 
            type="button" 
            className={`input-icon-btn ${isListening ? "listening" : ""} ${mode === "nearby" ? "disabled" : ""}`}
            onClick={handleVoiceClick}
            title="Voice"
            disabled={mode === "nearby"}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
              <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
              <line x1="12" y1="19" x2="12" y2="23"></line>
              <line x1="8" y1="23" x2="16" y2="23"></line>
            </svg>
          </button>

          <button 
            type="submit" 
            className="send-btn" 
            title="Send"
            disabled={mode === "nearby"}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 16 16 12 12 8"></polyline>
              <line x1="8" y1="12" x2="16" y2="12"></line>
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
}
