var topLeft = document.querySelector(".top-left-circle");
var topRight = document.querySelector(".top-right-circle");
var bottomLeft = document.querySelector(".bottom-left-circle");
var bottomRight = document.querySelector(".bottom-left-circle")

var sequence = [topLeft, topRight, bottomLeft, bottomRight];

var flash = circle => {
    return new Promise((resolve, reject) => {
        circle.className += " active";
        setTimeout(() => {
                circle.className = circle.className.replace(" active", "");
                resolve();
            }, 1000);
        });
    };

