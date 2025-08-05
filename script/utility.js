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

function setAlphabet(elementId) {
    const getId = document.getElementById(elementId);
    getId.classList.add('bg-orange-400')
    
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