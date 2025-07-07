const BOARD_WIDTH = 800;
const BOARD_HEIGHT = 750;
let ctx = null;

let scrollX = 0;
let scrollY = 0;

//img

let mrlf_1 = new Image();
mrlf_1.src = "../img/mrlf_1.png";
let bg1_1 = new Image();
bg1_1.src = "../img/bg1_1.png";

window.onload = function () {

    const myCanvas = document.getElementById("myCanvas");
    ctx = myCanvas.getContext("2d");

    drawimg();
    let keyState = {};

    window.onkeydown = function (event) {
        keyState[event.code] = true;
    };

    window.onkeyup = function (event) {
        keyState[event.code] = false;
    };

    setInterval(function () {
        if (keyState["ArrowRight"]) scrollX += 10;
        if (keyState["ArrowLeft"]) scrollX -= 10;
        if (keyState["ArrowDown"]) scrollY += 10;
        if (keyState["ArrowUp"]) scrollY -= 10;

        const maxScrollX = bg1_1.width-256;
        const maxScrollY = bg1_1.height-240;

        if (scrollX < 0) scrollX = 0;
        if (scrollY < 0) scrollY = 0;
        if (maxScrollX < scrollX) scrollX = maxScrollX;
        if (maxScrollY < scrollY) scrollY = maxScrollY;

        drawimg();
    }, 1000 / 60);
};

window.onkeydown

function drawimg() {
    ctx.clearRect(0, 0, BOARD_WIDTH, BOARD_HEIGHT);
    ctx.drawImage(bg1_1, scrollX, scrollY, 256, 240, 0, 0, BOARD_WIDTH, BOARD_HEIGHT);
};