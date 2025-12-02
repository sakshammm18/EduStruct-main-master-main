
import { useEffect, useState, useRef } from "react";
import ChatbotIcon from "./ChatbotIcon";
import ChatForm from "./ChatForm";

import ChatMessage from "./ChatMessage";
import "./ChatbotWidget.css"; // style separately
import { CircleX, MessageCircle } from "lucide-react";
const VITE_API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyBADXcyctr_4R_QOjg3p-f9BT9-lLOKNGk"
const ChatbotWidget = () => {
  const [chatHistory, setChatHistory] = useState([]);
  const [showChatbot, setShowChatbot] = useState(false);
  const chatBodyRef = useRef();

 
  //   const updateHistory = (text, isError = false) => {
  //     setChatHistory(prev => [
  //       ...prev.filter(msg => msg.text !== "Thinking..."),
  //       { role: "model", text, isError }
  //     ]);
  //   };

  //   history = history.map(({ role, text }) => ({ role, parts: [{ text }] }));
  //   const requestOptions = {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({ contents: history }),
  //   };

  //   try {
  //     const response = await fetch(VITE_API_URL, requestOptions);
  //     const data = await response.json();
  //     if (!response.ok) throw new Error(data.error.message || "Something Went Wrong");
  //     const apiResponseText = data.candidates[0].content.parts[0].text.replace(/\\(.?)\\*/g, "$1").trim();
  //     updateHistory(apiResponseText);
  //   } catch (error) {
  //     updateHistory(error.message, true);
  //   }
  // };
  const generateBotResponse = async (history) => {
    const updateHistory = (text, isError = false) => {
      setChatHistory(prev => [
        ...prev.filter(msg => msg.text !== "Thinking..."),
        { role: "model", text, isError }
      ]);
    };
  
    try {
      const latestUserMessage = history[history.length - 1].text;
  
      const requestBody = {
        contents: [
          {
            role: "user",
            parts: [{ text: latestUserMessage }]
          }
        ]
      };
  
      const response = await fetch(VITE_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestBody)
      });
  
      const data = await response.json();
  
      if (!response.ok) {
        throw new Error(data.error?.message || "Something went wrong");
      }
  
      const apiReply = data.candidates?.[0]?.content?.parts?.[0]?.text || "No response from the model.";
      updateHistory(apiReply.trim());
    } catch (err) {
      console.error("API Error:", err);
      updateHistory("Something went wrong. Please try again later.", true);
    }
  };
  
  
  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTo({ top: chatBodyRef.current.scrollHeight, behavior: "smooth" });
    }
  }, [chatHistory]);

  return (
    <div className={`chatbot-container ${showChatbot ? "open" : ""}`}>
      <button onClick={() => setShowChatbot(prev => !prev)} className="chatbot-toggle">
        {/* <span className="material-symbols-rounded">mode_comment</span> */}
        {/* <span className="material-symbols-rounded">close</span> */}
        <MessageCircle />
      </button>

      {showChatbot && (
        <div className="chatbot-popup">
          <div className="chat-header">
            <div className="header-info flex justify-between items-center">
              <div className="flex items-center gap-1">
              <ChatbotIcon className='w-7 h-7'/>
              <h2 className="logo-text font-bold">Edustruct AI</h2>
              </div>
           
            <button onClick={() => setShowChatbot(prev => !prev)} className="material-symbols-rounded cursor-pointer">
            <CircleX />
            </button>
            </div>
          </div>

          <div ref={chatBodyRef} className="chat-body">
            <div className="message bot-message">
              {/* <ChatbotIcon /> */}
              <p className="message-text text-sm font-medium">Hey there 👋, <br /> How can I help you today?</p>
            </div>
            {chatHistory.map((chat, index) => (
              <ChatMessage key={index} chat={chat} />
            ))}
          </div>

          <div className="chat-footer">
            <ChatForm chatHistory={chatHistory} setChatHistory={setChatHistory} generateBotResponse={generateBotResponse} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatbotWidget;