import React from "react";
import Chatbot from "react-chatbot-kit";
import config from "./config";
import MessageParser from "./MessageParser";
import ActionProvider from "./ActionProvider";
import "react-chatbot-kit/build/main.css";
import "./Chatbot.css";

const ChatbotComponent = () => {
    return (
        <div className="chatbot">
            <div className="chatbot-container">
                <Chatbot config={config} messageParser={MessageParser} actionProvider={ActionProvider} />
            </div>
        </div>
    );
};

export default ChatbotComponent;
