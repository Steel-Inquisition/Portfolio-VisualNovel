// Main Character Potrait
let personImgEl = document.createElement("img");
personImgEl.src = "images/me.png";

// Uwu character potrait 1
let uwuImgEl = document.createElement("img");
uwuImgEl.src = "images/uwu.png";

// Uwu character potrait 2
let uwu2ImgEl = document.createElement("img");
uwu2ImgEl.src = "images/unhappyUwu.png";

// Uwu character potrait 3
let uwu3ImgEl = document.createElement("img");
uwu3ImgEl.src = "images/GODUwu.png";

// Uwu character potrait 4
let uwu4ImgEl = document.createElement("img");
uwu4ImgEl.src = "images/cuteUwu.png";

// Uwu sad
let uwu5ImgEl = document.createElement("img");
uwu5ImgEl.src = "images/sadUwu.png";

// dead UWU
let uwu6ImgEl = document.createElement("img");
uwu6ImgEl.src = "images/deadUwu.png";

// Nun potrait 1
let nunImgEl = document.createElement("img");
nunImgEl.src = "images/nun.png";

// Nun potrait 2
let nun2ImgEl = document.createElement("img");
nun2ImgEl.src = "images/trickyNun.png";

// Nun Potrait 3
let nun3ImgEl = document.createElement("img");
nun3ImgEl.src = "images/devilNun.png";

// Sword
let swordImgEl = document.createElement("img");
swordImgEl.src = "images/sword.png";

// Fire Sword
let fireswordImgEl = document.createElement("img");
fireswordImgEl.src = "images/fireSword.png";

// King
let kingImgEl = document.createElement("img");
kingImgEl.src = "images/king.png";


// Main Character Apartment
let backgroundImgEl = document.createElement("img");
backgroundImgEl.src = "images/Inside-apartment.jpg";

// Main Character Kitchen
let kitchenImgEl = document.createElement("img");
kitchenImgEl.src = "images/kitchen.png";

// Main Character Tv room
let tvImgEl = document.createElement("img");
tvImgEl.src = "images/tvRoom.jpg";

// Hallway
let hallImgEl = document.createElement("img");
hallImgEl.src = "images/doorways.jpg";

// Space
let spaceImgEl = document.createElement("img");
spaceImgEl.src = "images/space.jpg";

// Store
let storeImgEl = document.createElement("img");
storeImgEl.src = "images/store.jpg";

// store
let instoreImgEl = document.createElement("img");
instoreImgEl.src = "images/inside.jpg";

// throne
let throneImgEl = document.createElement("img");
throneImgEl.src = "images/throne.jpg";

// War
let warImgEl = document.createElement("img");
warImgEl.src = "images/war.jpg";

// Earth
let earthImgEl = document.createElement("img");
earthImgEl.src = "images/earth.jpeg";


function stroke(color) {
    ctx.strokeStyle = color;
}

function stroke(style) {
    ctx.strokeStyle = style;
}

function fill(style) {
    ctx.fillStyle = style;
}

function lineWidth(width) {
    ctx.lineWidth = width;
}

function font(fontSettng) {
    ctx.font = fontSettng;
}

// Draw a stroke or fill rectangle with a top left corner of (x, y), and a width of w and a height of h
function rect(x, y, w, h, mode) {
    if (mode == "fill") {
        ctx.fillRect(x, y, w, h);
    } else if (mode == "stroke") {
        ctx.strokeRect(x, y, w, h);
    }
}

// Draw a line segment from (x1, y1) to (x2, y2)
function line(x1, y1, x2, y2) {
    console.log(x1, y1, x2, y2);
    ctx.beginPath();
    ctx.moveTo(x1, y1); //Endpoint 1
    ctx.lineTo(x2, y2); // Endpoint 2
    ctx.stroke();
}

// Draw a circle with a center (x,y) and radius of r
function circle(x, y, r, mode) {
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2 * Math.PI);

    if (mode == "fill") {
        ctx.fill();
    } else if (mode == "stroke") {
        ctx.stroke();
    }
}

function triangle(x1, y1, x2, y2, x3, y3, mode) {
    ctx.beginPath();
    ctx.moveTo(x1, y1); // Vertex 1
    ctx.lineTo(x2, y2); // Vertex 2
    ctx.lineTo(x3, y3); // Vertex 3

    if (mode == "fill") {
        ctx.fill();
    } else if (mode == "stroke") {
        ctx.closePath();
        ctx.stroke();
    }

    ctx.stroke();
}

function text(message, x, y, mode) {
    if (mode == "fill") {
        ctx.fillText(message, x, y);
    } else if (mode == "stroke") {
        ctx.strokeText(message, x, y);
    }
}

function ellipse(x, y, xRadius, yRadius, rotation, mode) {
    ctx.beginPath();
    ctx.ellipse(x, y, xRadius, yRadius, rotation, 0, 2 * Math.PI);

    if (mode == "fill") {
        ctx.fill();
    } else if (mode == "stroke") {
        ctx.stroke();
    }

    ctx.stroke();
}

function image(img, x, y, w, h) {
    ctx.drawImage(img, x, y, w, h);
}

function imageClip(img, xc, yc, wc, hc, x, y, w, h) {
    ctx.drawImage(img, xc, yc, wc, hc, x, y, w, h);
}

// if (keyIsPressed){
//
//}

// let keyIsPressed = {};

// document.addEventListener("keydown", keydownHandler)
// document.addEventListener("keyup", keyupHandler)

// function keydownHandler(event) {
//     keyIsPressed[event.keyCode] = true;
// }

// function keydownHandler(event) {
//     keyIsPressed[event.keyCode] = false;
// }