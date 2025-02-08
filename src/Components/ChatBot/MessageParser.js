class MessageParser {
    constructor(actionProvider, state) {
        this.actionProvider = actionProvider;
        this.state = state;
    }

    parse(message) {
        message = message.trim();

        console.log("User Input:", message);  // Debugging

        if (!message) {
            this.actionProvider.unknownInput();
            return;
        }

        switch (this.state.currentStep) {
            case "askName":
                this.actionProvider.askLocation(message);
                break;
            case "askLocation":
                this.actionProvider.askEmergencyLevel(message);
                break;
            case "askEmergency":
                this.actionProvider.askNeeds(message);
                break;
            case "askNeeds":
                this.actionProvider.askPeopleAffected(message);
                break;
            case "askPeopleAffected":
                this.actionProvider.askPhoneNumber(message);
                break;
            case "askPhoneNumber":
                this.actionProvider.endConversation(message);
                break;
            default:
                this.actionProvider.unknownInput();
        }
    }
}

export default MessageParser;
