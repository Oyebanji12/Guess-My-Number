
/*var cv= document.querySelector('.message').textContent;
console.log(cv)

document.querySelector('.message').textContent='correct value';

document.querySelector('.number').textContent=34;
document.querySelector('.score').textContent=90;
console.log( document.querySelector('.guess').value)
*/

/*
else if(guess > secretNumber){
    document.querySelector('.message').textContent='Too High';
    score= score - 1;
    document.querySelector('.score').textContent=score;
    if(score === 0){
        document.querySelector('.message').textContent='You Lost the Game';
    }

} else if(guess < secretNumber){
    document.querySelector('.message').textContent='Too Low';
    score= score - 1;
    document.querySelector('.score').textContent=score;
} if(score === 0){
    document.querySelector('.message').textContent='You Lost the Game';

}
*/



var secretNumber= Math.floor(Math.random()*20)+1;
var score=20;
var highScore=0;

//document.querySelector('.number').textContent=secretNumber


document.querySelector('.check').addEventListener('click', function () {
 var guess= Number(document.querySelector('.guess').value);
 console.log(guess, typeof guess); 

// when there's no input 
if(!guess){
    document.querySelector('.message').textContent=' No Guess';

// when the guess is equal to the secret number
} else if(guess === secretNumber){
    document.querySelector('.message').textContent='Correct Number';

    document.querySelector('.number').textContent=secretNumber
    
    // when the guess is equal to secret number backgroundColor should change
    document.querySelector('body').style.backgroundColor='#60b347'

    // when the guess is equal to secret number, the width should change
    document.querySelector('.number').style.width='30rem';

    // implementing high score
    if(score > highScore){
        highScore = score;
        document.querySelector('.highscore').textContent= highScore;
    }
    

// when guess is too high
} else if(guess > secretNumber){
    if(score > 1){
    document.querySelector('.message').textContent='Too High';
    score= score - 1;
    document.querySelector('.score').textContent=score;
    } else{
        document.querySelector('.message').textContent='You Lost the Game';
        document.querySelector('.score').textContent=0;
    }
    
// when guess is too low
} else if(guess < secretNumber){
    if(score > 1){
    document.querySelector('.message').textContent='Too Low';
    score= score - 1;
    document.querySelector('.score').textContent=score;
} else{
    document.querySelector('.message').textContent='You Lost the Game';
    document.querySelector('.score').textContent=0;

}
}

})


document.querySelector('.again').addEventListener('click', function () {
    var secretNumber= Math.floor(Math.random()*20)+1;
    var score=20

    document.querySelector('.message').textContent='Start Guessing';
    document.querySelector('.number').textContent='?';
    document.querySelector('.score').textContent=score;
    document.querySelector('.guess').value='';

    document.querySelector('body').style.backgroundColor='black';
    document.querySelector('.number').style.width='15rem';
    
})


