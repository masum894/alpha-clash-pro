function alphabet() {
     const pressButton = getAlphabet();
    // console.log(pressButton);
    const showAlphabet = document.getElementById('current-alphabet');
    showAlphabet.innerText = pressButton;
    setAlphabet(pressButton);
    
}

function play() {
    hideElement('home');
    ShowElement('play-ground');
    alphabet()
}