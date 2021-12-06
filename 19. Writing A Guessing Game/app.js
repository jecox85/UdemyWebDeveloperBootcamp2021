let numGuesses = 0;
let maximum = parseInt(prompt("Enter the maximum number."));
while(!maximum || maximum < 0){
    maximum = parseInt(prompt("Enter a valid number."));
}

const targetNum = Math.floor(Math.random() * maximum) + 1;

let guess = parseInt(prompt("Enter your first guess!"));
let attempts = 1;
while(parseInt(guess) !== targetNum){
    attempts++;
    if(guess === 'q'){
        break;
    }
    else if(guess > targetNum){
        guess = prompt("Too high! Enter a new guess:");
    }
    else{
        guess = prompt("Too low! Enter a new guess:");
    }
}

if(guess === 'q'){
    console.log("Quitter");
}
else {
    console.log("Congratulations Winner!")
    console.log(`You Got it! It took you ${attempts} guesses.`);
}
