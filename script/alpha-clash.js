function alphabet() {
     const pressButton = getAlphabet();
    // console.log(pressButton);
    const showAlphabet = document.getElementById('current-alphabet');
    showAlphabet.innerText = pressButton;
    setAlphabet(pressButton);
    
}

document.addEventListener('keyup', eventListener);

function eventListener(element) {
    const showAlphabet = document.getElementById('current-alphabet');
    const getTotalScore = document.getElementById('total-score');
    const showAlphabetInnerTex = showAlphabet.innerText;
     const allphabet = showAlphabetInnerTex.toLowerCase();
    const typeAlphabet = element.key;
   
     if (allphabet === typeAlphabet) {
        // console.log('matched');

        // get id
        const getScore = scoreId('score');
        // innerText,parseInt and set a new value
        // console.log(getScore);
        
        const score = getScore + 1;
        // console.log(score);
        
        //   show on the right place
        setValue('score', score);

        alphabet();
        removeBg(allphabet);
     }
     else{
        // get id,innerText and parseInt by a function
        const getLife = scoreId('life');
        //  set a new value
        const life = getLife - 1;
        // show on the right place
        setValue('life', life);

        // try 
        if (life === 0) {
            gameOver();
        }
        
     }
    
}


function play() {
    hideElement('home');
    ShowElement('play-ground');
    hideElement('score-board');
    setValue('life', 5);
    setValue('score', 0);
    // removeBg(allphabet);
    
    alphabet()
}
function gameOver() {
   hideElement('play-ground');
   ShowElement('score-board'); 
   const lastScore = scoreId('score');
    setValue('total-score', lastScore);
    const currentAlphabet = getElementTextById('current-alphabet');
    removeBg(currentAlphabet);

}