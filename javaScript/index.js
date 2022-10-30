// this give random value from 1 to 6 by adding +1 if not added it will give 0 to 5 also we dont need decimal value so floor was used
let randomNumber1 = Math.floor(Math.random() * 6) + 1;
// creating dice image by concatenate the random and dice string  dice1.png to dice6.png
let randomDiceImage = "dice" + randomNumber1 + ".png";
// creating random image source images/dice1.png to images/dice6.png
let randomImageSource = "images/" + randomDiceImage;

// selecting first source images
let iamge1 = document.querySelectorAll('img')[0];
// setting attribute
iamge1.setAttribute('src', randomImageSource);


let randomNumber2 = Math.floor(Math.random() * 6) + 1;

let randomDiceImage2 = "dice" + randomNumber2 + ".png";

randomImageSource = "images/" + randomDiceImage2;

// let image2=document.querySelectorAll('img')[1];
// image2.setAttribute('src',randomImageSource);

// or 

document.querySelectorAll('img')[1].setAttribute('src', randomImageSource);

// who wins
if (randomNumber1 > randomNumber2) {
    document.querySelector('h1').innerHTML = "Player 1 Wins! 🏆🏆";
} else if (randomNumber2 > randomNumber1) {
    document.querySelector('h1').innerHTML = "Player 2 Wins! 🏆🏆";
}
// if draw
else {
    document.querySelector('h1').innerHTML = "Draw 🤷‍♂️🤷‍♂️Play Again To Win";
}
