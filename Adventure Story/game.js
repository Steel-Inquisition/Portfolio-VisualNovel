// Global Variable
let txt = [];

// Fetch Content from nickname.txt
fetch("text.txt").then(convertData).then(processData);

function convertData(rawData) {
    return rawData.text();
}

function processData(stringData) {
    txt = stringData.split(/\r?\n/);
}

// Instanly load and draw
window.addEventListener("load", titleScreen);

function titleScreen() {
    drawTextBox();
    drawText();
    skipBox();
}

function mainDraw() {
    drawBackground(backdrop);
    drawMain(person);
    drawTextBox();
    drawText();
}

function drawMain() {

    if (person == 1) {
        ctx.drawImage(personImgEl, 10, 10, 700, 500);
    } else if (person == 2) { // Base Uwu Form
        ctx.drawImage(uwuImgEl, 10, 10, 700, 500);
    } else if (person == 3) { // Unhappy Uwu
        ctx.drawImage(uwu2ImgEl, 10, 10, 700, 500);
    } else if (person == 4) { // GOD Uwu
        ctx.drawImage(uwu3ImgEl, 10, 10, 700, 500);
    } else if (person == 5) { // nun
        ctx.drawImage(nunImgEl, 10, 10, 700, 500);
    } else if (person == 6) { // nun tricky
        ctx.drawImage(nun2ImgEl, 10, 10, 700, 500);
    } else if (person == 7) { // nun devil
        ctx.drawImage(nun3ImgEl, 10, 10, 700, 500);
    } else if (person == 8) { // Sword
        ctx.drawImage(swordImgEl, 10, 10, 700, 500);
    } else if (person == 9) { // blush uwu
        ctx.drawImage(uwu4ImgEl, 10, 10, 700, 500);
    } else if (person == 10) { // sad uwu
        ctx.drawImage(uwu5ImgEl, 10, 10, 700, 500);
    } else if (person == 11) { // fire sword
        ctx.drawImage(fireswordImgEl, 10, 10, 800, 500);
    } else if (person == 12) { // king
        ctx.drawImage(kingImgEl, 10, -150, 800, 600);
    } else if (person == 13) { // dead uwu
        ctx.drawImage(uwu6ImgEl, 10, 10, 800, 600);
    }
}

function drawBackground() {
    if (backdrop == 1) { // apartment
        ctx.drawImage(backgroundImgEl, 10, 10, 800, 700);
    } else if (backdrop == 2) { // kitchen
        ctx.drawImage(kitchenImgEl, 10, 10, 800, 700);
    } else if (backdrop == 3) { // tv room
        ctx.drawImage(tvImgEl, 10, 10, 800, 700);
    } else if (backdrop == 4) { // hallway
        ctx.drawImage(hallImgEl, 10, 10, 800, 700);
    } else if (backdrop == 5) { // space
        ctx.drawImage(spaceImgEl, 10, 10, 800, 700);
    } else if (backdrop == 6) { // store
        ctx.drawImage(storeImgEl, 10, 10, 800, 700);
    } else if (backdrop == 7) { // throne room
        ctx.drawImage(throneImgEl, 10, 10, 800, 700);
    } else if (backdrop == 8) { // inside store
        ctx.drawImage(instoreImgEl, 10, 10, 800, 700);
    } else if (backdrop == 9) { // angel war
        ctx.drawImage(warImgEl, 10, 10, 850, 700);
    } else if (backdrop == 10) { // earth
        ctx.drawImage(earthImgEl, 10, 10, 1000, 700)
    }

}

function drawTextBox() {
    // Draw Text Box
    fill("lightblue");
    rect(0, 450, 800, 200, "fill");
}

function drawText() {
    // Draw some Text
    fill("black");
    font("25px Arial");
    text(message, 10, 490, "fill");
}

function skipBox() {
    //Draw text to skip stuff
    fill("red");
    font("25px Arial");
    text("PRESS s and then click TO SKIP TO DECISIONS (anytime)", 10, 570, "fill");
}


// MAKE THIS CODE MORE EFFICENT LATER, SUCH AS HAVING THE BACKGROUND and CHARACTER GETTING VALUES BY PUSHING INTO THEM. WORK THIS WITH THE MESSAGES AS WELL.
function scenario() { // Message and Background

    if (start == 0) { // chapter 1
        return [1, 0];
    } else if (start == 4) {
        return [1, 1];
    } else if (start == 7) {
        return [1, 0];
    } else if (start == 9) {
        return [2, 0];
    } else if (start == 15) {
        return [2, 2];
    } else if (start == 20) {
        return [2, 3];
    } else if (start == 28) {
        return [2, 2];
    }

    if (start == 38) { // chapter 2a
        return [2, 0];
    } else if (start == 40) {
        return [2, 2];
    } else if (start == 41) {
        return [2, 0];
    } else if (start == 42) {
        return [2, 2];
    } else if (start == 45) {
        return [2, 3];
    } else if (start == 48) {
        return [2, 0];
    } else if (start == 51) {
        return [2, 2];
    } else if (start == 55) {
        return [2, 4];
    } else if (start == 56) {
        return [2, 2];
    } else if (start == 57) {
        return [2, 4];
    } else if (start == 59) {
        return [2, 2];
    } else if (start == 64) {
        return [3, 0];
    } else if (start == 76) {
        return [3, 2];
    } else if (start == 84) {
        return [3, 0];
    } else if (start == 91) {
        return [3, 5];
    } else if (start == 101) {
        return [3, 6];
    } else if (start == 103) {
        return [3, 0];
    } else if (start == 114) {
        return [2, 4];
    } else if (start == 116) {
        return [2, 0];
    } else if (start == 119) {
        return [4, 0];
    } else if (start == 121) {
        return [4, 6];
    }

    if (start == 141) { // ending 1a
        return [4, 7];
    } else if (start == 156) {
        return [4, 4];
    } else if (start == 166) {
        return [4, 8];
    } else if (start == 168) {
        return [4, 7];
    } else if (start == 189) {
        return [4, 4];
    } else if (start == 210) {
        return [4, 10];
    } else if (start == 224) {
        return [4, 7];
    }


    if (start == 256) { // ending 1b
        return [4, 0];
    } else if (start == 262) {
        return [4, 4];
    } else if (start == 296) {
        return [4, 9];
    } else if (start == 298) {
        return [4, 4];
    } else if (start == 299) {
        return [4, 9];
    } else if (start == 302) {
        return [4, 4];
    } else if (start == 304) {
        return [4, 0];
    } else if (start == 311) {
        return [4, 4];
    } else if (start == 324) {
        return [5, 8];
    } else if (start == 332) {
        return [5, 0];
    } else if (start == 338) {
        return [5, 1];
    } else if (start == 345) {
        return [4, 0];
    } else if (start == 346) {
        return [4, 4];
    } else if (start == 350) {
        return [4, 10];
    } else if (start == 354) {
        return [4, 0];
    } else if (start == 358) {
        return [4, 10];
    } else if (start == 372) {
        return [4, 0];
    } else if (start == 375) {
        return [4, 7];
    } else if (start == 381) {
        return [4, 4];
    } else if (start == 383) {
        return [4, 11];
    } else if (start == 386) {
        return [4, 7];
    } else if (start == 388) {
        return [4, 4];
    } else if (start == 390) {
        return [4, 7];
    } else if (start == 392) {
        return [4, 4];
    } else if (start == 394) {
        return [4, 10];
    } else if (start == 399) {
        return [4, 4];
    } else if (start == 403) {
        return [4, 10];
    } else if (start == 404) {
        return [4, 7];
    } else if (start == 407) {
        return [4, 0];
    } else if (start == 428) {
        return [4, 8];
    } else if (start == 429) {
        return [4, 7];
    } else if (start == 435) {
        return [4, 0];
    } else if (start == 441) {
        return [4, 10];
    } else if (start == 444) {
        return [4, 0];
    } else if (start == 453) {
        return [4, 2];
    } else if (start == 461) {
        return [4, 0];
    } else if (start == 466) {
        return [4, 2];
    } else if (start == 471) {
        return [4, 9];
    }

    if (start == 485) { // Chapter 2b
        return [2, 0];
    } else if (start == 491) {
        return [2, 2];
    } else if (start == 496) {
        return [2, 10];
    } else if (start == 500) {
        return [2, 9];
    } else if (start == 503) {
        return [4, 0];
    } else if (start == 506) {
        return [4, 10];
    } else if (start == 510) {
        return [6, 0];
    } else if (start == 512) {
        return [6, 2];
    } else if (start == 516) {
        return [6, 3];
    } else if (start == 523) {
        return [6, 10];
    } else if (start == 525) {
        return [6, 0];
    } else if (start == 529) {
        return [6, 10];
    } else if (start == 543) {
        return [6, 0];
    } else if (start == 556) {
        return [7, 12];
    } else if (start == 557) {
        return [7, 2];
    } else if (start == 559) {
        return [7, 0];
    } else if (start == 561) {
        return [7, 12];
    } else if (start == 562) {
        return [7, 2];
    } else if (start == 563) {
        return [7, 12];
    } else if (start == 566) {
        return [7, 0];
    } else if (start == 567) {
        return [6, 0];
    } else if (start == 568) {
        return [6, 10];
    } else if (start == 571) {
        return [6, 0];
    } else if (start == 573) {
        return [6, 3];
    } else if (start == 577) {
        return [6, 0];
    } else if (start == 581) {
        return [6, 4];
    } else if (start == 582) {
        return [6, 10];
    } else if (start == 585) {
        return [6, 0];
    } else if (start == 592) {
        return [8, 0];
    } else if (start == 595) {
        return [8, 10];
    } else if (start == 608) {
        return [8, 0];
    } else if (start == 611) {
        return [6, 0];
    } else if (start == 617) {
        return [6, 10];
    } else if (start == 625) {
        return [6, 0];
    } else if (start == 626) {
        return [7, 0];
    } else if (start == 627) {
        return [7, 12];
    } else if (start == 635) {
        return [5, 0];
    } else if (start == 639) {
        return [6, 0];
    } else if (start == 640) {
        return [6, 10];
    }

    if (start == 647) { // ending 2a
        return [6, 0];
    } else if (start == 658) {
        return [6, 10];
    } else if (start == 662) {
        return [6, 0];
    } else if (start == 666) {
        return [6, 2];
    } else if (start == 668) {
        return [6, 0];
    } else if (start == 670) {
        return [6, 2];
    } else if (start == 672) {
        return [6, 0];
    } else if (start == 677) {
        return [6, 2];
    } else if (start == 686) {
        return [6, 0];
    } else if (start == 690) {
        return [6, 10];
    } else if (start == 693) {
        return [6, 4];
    } else if (start == 694) {
        return [6, 10];
    } else if (start == 696) {
        return [6, 4];
    } else if (start == 699) {
        return [6, 0];
    } else if (start == 700) {
        return [6, 10];
    } else if (start == 708) {
        return [6, 0];
    } else if (start == 711) {
        return [6, 10];
    } else if (start == 727) {
        return [5, 0];
    } else if (start == 731) {
        return [5, 9];
    } else if (start == 733) {
        return [5, 0];
    } else if (start == 736) {
        return [5, 10];
    } else if (start == 738) {
        return [5, 0];
    } else if (start == 748) {
        return [5, 10];
    } else if (start == 749) {
        return [5, 0];
    } else if (start == 755) {
        return [6, 0];
    } else if (start == 756) {
        return [6, 10];
    } else if (start == 758) {
        return [6, 7];
    } else if (start == 762) {
        return [6, 0];
    } else if (start == 763) {
        return [6, 10];
    } else if (start == 764) {
        return [6, 0];
    } else if (start == 770) {
        return [6, 10];
    } else if (start == 774) {
        return [6, 0];
    } else if (start == 782) {
        return [6, 10];
    } else if (start == 784) {
        return [5, 0];
    }

    if (start == 796) {
        return [6, 0];
    } else if (start == 799) {
        return [6, 10];
    } else if (start == 802) {
        return [6, 0];
    } else if (start == 805) {
        return [9, 7];
    } else if (start == 806) {
        return [9, 0];
    } else if (start == 808) {
        return [9, 12];
    } else if (start == 809) {
        return [9, 2]
    } else if (start == 810) {
        return [9, 0];
    } else if (start == 815) {
        return [6, 0];
    } else if (start == 821) {
        return [6, 10];
    } else if (start == 822) {
        return [6, 3];
    } else if (start == 827) {
        return [6, 4];
    } else if (start == 828) {
        return [6, 0];
    } else if (start == 831) {
        return [6, 3];
    } else if (start == 833) {
        return [6, 4];
    } else if (start == 837) {
        return [6, 3];
    } else if (start == 841) {
        return [5, 0];
    } else if (start == 844) {
        return [9, 0];
    } else if (start == 849) {
        return [5, 0];
    } else if (start == 856) {
        return [10, 0]
    } else if (start == 860) {
        return [9, 0];
    } else if (start == 861) {
        return [9, 1];
    } else if (start == 869) {
        return [6, 10];
    } else if (start == 871) {
        return [6, 4];
    } else if (start == 872) {
        return [6, 10];
    } else if (start == 875) {
        return [6, 3];
    } else if (start == 881) {
        return [6, 0];
    } else if (start == 894) {
        return [6, 13];
    } else if (start == 902) {
        return [6, 0];
    } else if (start == 906) {
        return [6, 13];
    } else if (start == 910) {
        return [6, 0];
    }

    return [0, 0];

}