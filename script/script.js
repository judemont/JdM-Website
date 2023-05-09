const messZone = document.getElementById("messagesZone");
const userInputDiv = document.getElementById("userInputAndButton");
const userInput = document.getElementById("userInput");

function MessageComponent(message){
    const messageDiv = document.createElement("div");
    messageDiv.setAttribute("class", "message");
    const messageText = document.createElement("p");
    messageText.setAttribute("class", "messageText");
    messageText.innerHTML = message;
    messageDiv.appendChild(messageText);
    return messageDiv;
}

function addMessage(message, msBeforeSend) {
    setTimeout(() => {
        messZone.appendChild(MessageComponent(message));
    }, msBeforeSend);
}

function initMessages(){
    addMessage("<b>Info:</b> <i>JdM</i> joined the chat.", 100);
    addMessage("<b>Info:</b> <i>You</i> joined the chat.", 500);
    addMessage("<b>JdM:</b> Hello, Welcome to my website !", 2000);
    addMessage('<b>JdM:</b> Here are the questions you can ask me: <br>"Who are you?",<br> "What are your skills?",<br> "How can I contact you?,<br> "What is you projects?".', 4000);
}

function getUserMessage(){
    let messageContent = userInput.value;
    addMessage("<b>You:</b> " + messageContent)
    answer = me[messageContent];
    addMessage("<b>JdM:</b> " + answer, 1000)
    userInput.value = ""

}

initMessages();
