var topLeft = document.querySelector(".top-left-circle");
var topRight = document.querySelector(".top-right-circle");
var bottomLeft = document.querySelector(".bottom-left-circle");
var bottomRight = document.querySelector(".bottom-left-circle")

var getRandomCircle = () => {
    var circles = [topLeft, topRight, bottomLeft, bottomRight];
    return circles[parseInt(Math.random() * circles.length)];
};

var sequence = [getRandomCircle(),
getRandomCircle(),
getRandomCircle(),
getRandomCircle()
];

var flash = circle => {
    return new Promise((resolve) => {
        circle.className += " active";
        setTimeout(() => {
                circle.className = circle.className.replace(" active", "");
                resolve();
            }, 1000);
        });
    };

var main = async () => {
    for(var circle of sequence) {
        await flash(circle);
    }
};
main();
