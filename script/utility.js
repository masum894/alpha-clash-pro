// Hide a Id
function hideElement(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}
// Show a Id
function ShowElement(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('hidden'); 
}
// add bg
function setAlphabet(elementId) {
    const getId = document.getElementById(elementId);
    getId.classList.add('bg-orange-400')
    
}
// remove bg
function removeBg(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400')
}

// get score id
function scoreId(elementId) {
    const getScoreId = document.getElementById(elementId);
    const scoreText = getScoreId.innerText;
    const currentScore = parseInt(scoreText);
    return currentScore;
}

function setValue(elementId, value) {
const element = document.getElementById(elementId);
element.innerText = value;
    
}
function getElementTextById(elementId) {
    const element = document.getElementById(elementId);
    const text = element.innerText;
    return text;
}

function getAlphabet() {
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');
    
    // get random number and alphabet
    const getRandomAlphabet = Math.random()*25;
    const index = Math.round(getRandomAlphabet);
    const alphabet = alphabets[index];
    
    return alphabet;
    
}
