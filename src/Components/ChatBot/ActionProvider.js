class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
        this.createChatBotMessage = createChatBotMessage;
        this.setState = setStateFunc;
    }

    askLocation(name) {
        console.log("User Name:", name);
        const message = this.createChatBotMessage(`Nice to meet you, ${name}! Please enter your current location (City/Area).`);
        this.updateChatbotState(message, "askLocation", { name });
    }

    askEmergencyLevel(location) {
        const message = this.createChatBotMessage(`Got it! You are in ${location}. How urgent is your situation?`, {
            widget: "emergencyOptions",
        });
        this.updateChatbotState(message, "askEmergency", { location });
    }

    askNeeds(level) {
        const message = this.createChatBotMessage(`You selected "${level}". What type of assistance do you need?`, {
            widget: "assistanceOptions",
        });
        this.updateChatbotState(message, "askNeeds", { emergencyLevel: level });
    }

    askPeopleAffected(needs) {
        const message = this.createChatBotMessage("How many people are affected (approximate number)?");
        this.updateChatbotState(message, "askPeopleAffected", { needs });
    }

    askPhoneNumber(people) {
        const message = this.createChatBotMessage("Please provide your phone number so our team can contact you.");
        this.updateChatbotState(message, "askPhoneNumber", { affectedPeople: people });
    }

    endConversation(phoneNumber) {
        const message = this.createChatBotMessage(
            `Thank you! We have received your details. Our team will contact you soon at ${phoneNumber}. Stay safe!`
        );
        this.updateChatbotState(message, "end", { phoneNumber });
    }

    unknownInput() {
        const message = this.createChatBotMessage("I'm sorry, I didn't understand that. Could you please rephrase?");
        this.updateChatbotState(message);
    }

    updateChatbotState(message, nextStep = this.state.currentStep, newUserData = {}) {
        this.setState((prevState) => ({
            ...prevState,
            messages: [...prevState.messages, message],
            currentStep: nextStep,
            userData: { ...prevState.userData, ...newUserData },
        }));
    }
}

export default ActionProvider;
