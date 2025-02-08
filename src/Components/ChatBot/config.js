import { createChatBotMessage } from "react-chatbot-kit";
import BotAvatar from "./BotAvatar";

const config = {
    botName: "Disaster Assistance Bot",
    initialMessages: [
        createChatBotMessage("Hello! Welcome to the Disaster Assistance Chatbot. What is your name?")
    ],
    state: {
        currentStep: "askName",  // Track chatbot progress
        userData: {}  // Store user details (name, location, emergency level, needs, affected people, phone number)
    },
    customStyles: {
        botMessageBox: {
            backgroundColor: "#004d40",
        },
        chatButton: {
            backgroundColor: "#00897b",
        },
    },
    customComponents: {
        botAvatar: (props) => <BotAvatar {...props} />,
    },
};

export default config;
