import { useEffect, useRef } from "react";

export default function ChatInterface({ messages }) {
  const messagesEndRef = useRef(null);

  // Auto scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Show only last 5 messages
  const visibleMessages = messages.slice(-5);

  return (
    <div className="chat-interface">
      <div className="messages-container">
        {visibleMessages.map((message, index) => (
          <div
            key={index}
            className={`message ${message.role === "ai" ? "message-ai" : "message-user"}`}
          >
            <div className="message-content">
              {message.role === "ai" && (
                <div className="message-avatar">
                  <span className="ai-icon">🤖</span>
                </div>
              )}
              <div className="message-text">{message.text}</div>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
    </div>
  );
}
