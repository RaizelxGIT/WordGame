let number;
let level = 1;
let task = document.getElementById("task");
let levelText = document.getElementById("levelText");
let userInput = document.getElementById("userInput");
let button = document.getElementById("button");

let timer; // holds the timer
let currentWord = ""; // stores the word to compare
let levelIndex = 0; // index for word list level

const words = [
    ["ant", "bat", "pot", "rat", "pen", "art", "map", "zip", "tap", "key"],
    ["bark", "camp", "dart", "farm", "gift", "hike", "joke", "lamp", "nest", "quiz"],
    ["apple", "brisk", "cabin", "drill", "eagle", "flame", "grape", "hover", "input", "jolly"],
    ["basket", "castle", "danger", "effort", "forest", "guitar", "hunger", "injure", "jungle", "kitten"],
    ["balance", "capture", "decimal", "elegant", "fortune", "gallery", "harmony", "imagine", "journey", "kingdom"],
    ["absolute", "backpack", "campaign", "daylight", "elephant", "friendly", "generate", "handover", "identify", "jubilant"],
    ["adventure", "baseplate", "celebrate", "defendant", "education", "favorable", "goldenrod", "headstart", "important", "jellyfish"],
    ["background", "collection", "declaration", "evaluation", "friendship", "generation", "handpicked", "illustrate", "journalism", "kaleidoscope"],
    ["acclimatized", "brainwashed", "consecutive", "description", "effectively", "friendliest", "grandfather", "householder", "influential", "justifiable"],
    ["acknowledging", "breathtaking", "circumcision", "disappearance", "exaggeration", "friendliness", "geographical", "hallucinated", "inflammation", "justification"],
    ["accomplishment", "blameworthiness", "characterizing", "discrimination", "extraordinaire", "fingerprinting", "groundskeeper", "hallucination", "interrogation", "justification"],
    ["administrations", "biotechnologist", "characteristics", "disenfranchised", "exterminations", "fractionalizing", "governmentally", "hypersensitive", "individualized", "jurisprudence"],
    ["acknowledgement", "businesspersons", "conceptualizing", "disenfranchising", "extraordinarily", "functionalities", "geopoliticizing", "hallucinations", "individualistic", "justifiableness"],
];

function start() {
    // Clear old timer if exists
    clearTimeout(timer);

    // Reset state
    userInput.value = "";
    userInput.focus();
    levelText.textContent = `Level: ${level}`;
    button.textContent = "Restart Game";

    // Get a new random word
    number = Math.floor(Math.random() * 10);
    levelIndex = Math.min(level - 1, words.length - 1); // prevent going out of range
    currentWord = words[levelIndex][number];
    task.textContent = `Your word is: ${currentWord}`;

    // Set new timer
    timer = setTimeout(() => {
        task.textContent = "You lose (time's up)";
        disableInput();
    }, 5000);
}

// Disable input when game is over
function disableInput() {
    userInput.disabled = true;
    button.textContent = "Play Again";
}

// Enable input again
function enableInput() {
    userInput.disabled = false;
    userInput.value = "";
    userInput.focus();
}

// Handle user input on Enter
userInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        if (userInput.value.trim() === currentWord) {
            clearTimeout(timer); // stop timer
            task.textContent = "Superb! 😎";
            level++;
            setTimeout(() => {
                enableInput();
                start(); // start next level
            }, 1000);
        } else {
            clearTimeout(timer);
            task.textContent = "You lose (wrong word)";
            disableInput();
        }
    }
});
