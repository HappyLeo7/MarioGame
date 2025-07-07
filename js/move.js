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

//윈도우 실행 즉시

window.onload = function () {

    //캔버스 호출
    const myCanvas = document.getElementById("myCanvas");
    ctx = myCanvas.getContext("2d");

    drawimg();

    //키보드 누를 시의 함수 설정
    let keyState = {};

    window.onkeydown = function (event) {
        keyState[event.code] = true;
    }; //키가 눌렸을 때 keyState 함수를 실행

    window.onkeyup = function (event) {
        keyState[event.code] = false;
    }; //키가 들렸을 때 keyState 함수를 멈춤

    setInterval(function () {
        // 방향키마다 10px만큼 이동
        if (keyState["ArrowRight"]) scrollX += 10;
        if (keyState["ArrowLeft"]) scrollX -= 10;
        if (keyState["ArrowDown"]) scrollY += 10;
        if (keyState["ArrowUp"]) scrollY -= 10;

        const maxScrollX = bg1_1.width-256; 
        const maxScrollY = bg1_1.height-240; //스크롤 최대값 지정

        if (scrollX < 0) scrollX = 0;
        if (scrollY < 0) scrollY = 0;
        if (maxScrollX < scrollX) scrollX = maxScrollX;
        if (maxScrollY < scrollY) scrollY = maxScrollY; 
        //화면 크기 바깥으로 스크롤이 나가지 못하게 하는 역할. Y축은 차후 파이프로 들어갈 때 락을 걸어야 할 수 있음.

        drawimg();
    }, 1000 / 60); //60fps
};

window.onkeydown

function drawimg() {
    ctx.clearRect(0, 0, BOARD_WIDTH, BOARD_HEIGHT);
    ctx.drawImage(bg1_1, scrollX, scrollY, 256, 240, 0, 0, BOARD_WIDTH, BOARD_HEIGHT);
};