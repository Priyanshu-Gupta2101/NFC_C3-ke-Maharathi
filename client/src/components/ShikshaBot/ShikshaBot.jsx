import { useState } from "react";
import Chatbot from "./ChatBot";
import "./chatbot.css";

function App() {
  const [isChatbotVisible, setChatbotVisible] = useState(false);

  const toggleChatbot = () => {
    setChatbotVisible(!isChatbotVisible);
  };

  return (
    <div className="chat-box">
      {isChatbotVisible && <Chatbot onClose={toggleChatbot} />}
      <button className="circular-button" onClick={toggleChatbot}>
        +
      </button>
    </div>
  );
}

export default App;
