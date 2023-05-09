const messZone = document.getElementById("messagesZone");
function MessageComponent(message){
    const messageDiv = document.createElement("div");
    messageDiv.setAttribute("class", "message");
    const messageText = document.createElement("p");
    messageText.setAttribute("class", "messageText");
    messageText.innerHTML = message;
    messageDiv.appendChild(messageText);
    return messageDiv;
}
function addMessage(message) {
    messZone.appendChild(MessageComponent(message))
}

addMessage("<b>Info:</b> JdM joined the chat")