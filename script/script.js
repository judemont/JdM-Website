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

function calculateCosineSimilarity(sentence1, sentence2) {
    // Fonction pour convertir une phrase en vecteur de mots
    function sentenceToVector(sentence) {
      const words = sentence.toLowerCase().split(" ");
      const wordCount = {};
      
      for (const word of words) {
        if (wordCount[word]) {
          wordCount[word] += 1;
        } else {
          wordCount[word] = 1;
        }
      }
      
      return wordCount;
    }
    
    // Convertir les phrases en vecteurs de mots
    const vector1 = sentenceToVector(sentence1);
    const vector2 = sentenceToVector(sentence2);
    
    // Obtenir tous les mots uniques des deux phrases
    const uniqueWords = new Set([...Object.keys(vector1), ...Object.keys(vector2)]);
    
    // Calculer les produits scalaires des vecteurs
    let dotProduct = 0;
    
    for (const word of uniqueWords) {
      dotProduct += (vector1[word] || 0) * (vector2[word] || 0);
    }
    
    // Calculer les magnitudes des vecteurs
    let magnitude1 = 0;
    
    for (const count of Object.values(vector1)) {
      magnitude1 += count * count;
    }
    
    magnitude1 = Math.sqrt(magnitude1);
    
    let magnitude2 = 0;
    
    for (const count of Object.values(vector2)) {
      magnitude2 += count * count;
    }
    
    magnitude2 = Math.sqrt(magnitude2);
    
    // Calculer la similarité cosinus
    const cosineSimilarity = dotProduct / (magnitude1 * magnitude2);
    
    return cosineSimilarity;
}
  
function findAnswer(userQuestion) {
    let bestSimilarity = -1;
    let bestAnswer = "";
  
    for (let i = 0; i < Object.keys(me).length; i++) {
      const question = Object.keys(me)[i];
  
      // Prétraitement des questions et des réponses
  
      // Calcul de la similarité cosinus
      const similarity = calculateCosineSimilarity(userQuestion, question);
        console.log(userQuestion)
        console.log(question)
        console.log(similarity)
      if (similarity > bestSimilarity) {
        bestSimilarity = similarity;
        bestAnswer = me[question];
      }
    }

    return bestAnswer;
  }
  
  // Utilisation de l'algorithme de similarité cosinus pour trouver la meilleure réponse
function getUserMessage() {
    let messageContent = userInput.value;
    addMessage("<b>You:</b> " + messageContent);
    
    // Prétraitement de la userQuestion de l'utilisateur
  
    let question = findAnswer(messageContent.toLowerCase());
    addMessage("<b>JdM:</b> " + question, 1000);
    userInput.value = "";
  }
  

function keyPressedInput(event) {
  if (event.key == "Enter") {
    getUserMessage();
  }
}

initMessages();
