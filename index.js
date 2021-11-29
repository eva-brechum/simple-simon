var topLeft = document.querySelector(".top-left-circle");
var topRight = document.querySelector(".top-right-circle");
var bottomLeft = document.querySelector(".bottom-left-circle");
var bottomRight = document.querySelector(".bottom-right-circle");

var getRandomCircles = () => {
    var circles = [topLeft, topRight, bottomLeft, bottomRight];
    return circles[Math.floor(Math.random() * circles.length)];
};


var sequence = [getRandomCircles()];

var flash = (circle) => {
    return new Promise((resolve, reject) =>{
        circle.className += " active";
        setTimeout(() => {
                circle.className = circle.className.replace(" active", " ");
                resolve();
            }, 500);
        });
    };

    let canClick = false;
var circleClicked = circleClicked => {
    if(!canClick) return;
    var expectedCircle = sequenceToGuess.shift();
    if (expectedCircle === circleClicked) {
        if(sequenceToGuess.length === 0) {
            // start new round
            sequence.push(getRandomCircles());
            sequenceToGuess = [sequence];
        }
    } else {
       // to end the game
       alert ("TRY AGAIN!")
    }
}

var startFlashing =() => {
    canClick = false;
    for (var circle of sequence) {
        await flash(circle);
    }
    canClick = true;
}
startFlashing();

// var main = async () => {
//     for(var circle of sequence) {
//         await flash(circle);
//     }
//     canClick =true;
// };
// main();

