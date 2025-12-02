

import { Upload } from 'lucide-react';
import React, { useRef } from 'react';

const ChatForm = ({ chatHistory, setChatHistory, generateBotResponse }) => {
  const inputRef = useRef();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const userMessage = inputRef.current.value.trim();
    if (!userMessage) return;
    inputRef.current.value = "";

    // Add user message and placeholder
    const updatedHistory = [
      ...chatHistory,
      { role: "user", text: userMessage },
      { role: "model", text: "Thinking..." },
    ];
    setChatHistory(updatedHistory);

    // Generate bot response based ONLY on the new user message
    setTimeout(() => {
      generateBotResponse([
        { role: "user", text: userMessage } // only current input
      ]);
    // generateBotResponse(updatedHistory);
    }, 600);
  };

  return (
    <form action="#" className="chat-form" onSubmit={handleFormSubmit}>
      <input
        ref={inputRef}
        type="text"
        placeholder="Message..."
        className="message-input"
        required
      />
      <button className="material-symbols-rounded cursor-pointer"><Upload /></button>
    </form>
  );
};

export default ChatForm;
