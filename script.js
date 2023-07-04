const description = document.getElementById('description');
const changeInterval = 1000;
const ITsentences = [
    "Program or be programmed.",
    "Simplicity is the soul of efficiency.",
    "Hello, World!",
    "Eat, Sleep, Code, Repeat.",
    "In code I trust.",
    "Keep calm and code on.",
    "There are 10 types of people in the world: Those who understand binary and those who don't.",
    "Open source is not just about sharing code, it's about sharing knowledge and empowering communities.",
    "Code never lies, comments sometimes do.",
    "Programming is the future we're building.",
    "Linux is not just an operating system, it's a philosophy.",
    "Code better every day, be better every day."
];

let interval;

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function changeSentence(sentence, place, sentences) {
  clearInterval(interval);
  place.innerText = sentence;
  let rand = getRandomInt(sentences.length);
  let intervalDelay = sentence.length * 50;
  interval = setInterval(changeSentence, intervalDelay, sentences[rand], place, sentences);
}

changeSentence("Keep calm and code on.", description, ITsentences);
