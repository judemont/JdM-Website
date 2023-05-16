const messZone = document.getElementById("messagesZone");
const userInputDiv = document.getElementById("userInputAndButton");
const userInput = document.getElementById("userInput");

function MessageComponent(message) {
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

function initMessages() {
  addMessage("<b>Info:</b> <i>JdM</i> joined the chat.", 100);
  addMessage("<b>Info:</b> <i>You</i> joined the chat.", 500);
  addMessage("<b>JdM:</b> Hello, Welcome to my website👋 !", 2000);
}

function getAvailableQuestionsString() {
  let available_questions = "<br>";
  for (let i = 0; i < Object.keys(me).length; i++) {
    available_questions += "'" + Object.keys(me)[i] + "',<br> ";
  }
  return available_questions;
}

function calculateCosineSimilarity(vectorA, vectorB) {
    const dotProduct = vectorA * vectorB;
    const magnitudeA = Math.sqrt(Math.multiply(vectorA, vectorA));
    const magnitudeB = Math.sqrt(Math.multiply(vectorB, vectorB));
    const similarity = dotProduct / (magnitudeA * magnitudeB);
    return similarity;
}
  
function findAnswer(userQuestion) {
    let bestSimilarity = -1;
    let bestAnswer = "";
  
    for (let i = 0; i < Object.keys(me).length; i++) {
      const question = Object.keys(me)[i];
      const answer = me[question];
  
      // Prétraitement des questions et des réponses
  
      // Calcul de la similarité cosinus
      const similarity = calculateCosineSimilarity(question, answer);
  
      if (similarity > bestSimilarity) {
        bestSimilarity = similarity;
        bestAnswer = answer;
      }
    }
  
    return bestAnswer;
  }
  
  // Utilisation de l'algorithme de similarité cosinus pour trouver la meilleure réponse
function getUserMessage() {
    let messageContent = userInput.value;
    addMessage("<b>You:</b> " + messageContent);
    
    // Prétraitement de la question de l'utilisateur
  
    let answer = findAnswer(messageContent.toLowerCase());
    addMessage("<b>JdM:</b> " + answer, 1000);
    userInput.value = "";
  }
  

function keyPressedInput(event) {
  if (event.key == "Enter") {
    getUserMessage();
  }
}

initMessages();
