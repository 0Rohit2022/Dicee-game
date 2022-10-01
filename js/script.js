const headingEl = document.getElementById("heading");

// for dice1

var randomNumber = Math.floor(Math.random()*6) + 1;

var randomDiceImage = "dice" + randomNumber + ".png";

var randomImagesSource = "images/" + randomDiceImage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src",randomImagesSource);


// For dice2

var randomNumber2 =  Math.floor(Math.random() * 6) + 1;

var randomDiceImageSource2 = "images/dice" + randomNumber2 + ".png";

var image2 = document.querySelectorAll("img")[1].setAttribute("src", randomDiceImageSource2)



if ( randomNumber > randomNumber2)
{
    document.getElementById('heading').innerText = "🚩Player 1 wins🚩"
}
else if( randomNumber2 > randomNumber)
{
    document.getElementById('heading').innerText = "🚩Player 2 wins🚩"
}
else {
    document.getElementById("heading").innerText = "Draw"
}

