var topLeft = document.querySelector(".top-left-circle");
var topRight = document.querySelector(".top-right-circle");
var bottomLeft = document.querySelector(".bottom-left-circle");
var bottomRight = document.querySelector(".bottom-right-circle");

var getRandomCircles = () => {
    var circles = [topLeft, topRight, bottomLeft, bottomRight];
    return circles[Math.floor(Math.random() * circles.length)];
};


var sequence = [getRandomCircles(),
getRandomCircles(),
getRandomCircles(),
getRandomCircles()
];

var flash = (circle) => {
    return new Promise((resolve, reject) =>{
        circle.className += " active";
        setTimeout(() => {
                circle.className = circle.className.replace(" active", " ");
                resolve();
            }, 500);
        });
    };

var main = async () => {
    for(var circle of sequence) {
        await flash(circle);
    }
};
main();

