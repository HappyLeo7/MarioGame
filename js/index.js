
const GAMEPAN_WIDTH = 1000;
const GAMEPAN_HEIGHT = 600;
let canvse = null;
let timer = null;

//마리오
let mario_img = new Image();
mario_img.src = "../img/mrlf_1.png"; //멈춘이미지
let mario_img2 = new Image();
mario_img2.src = "../img/mrlf_2.png"; //오른쪽이동이미지
let mario_j_r = new Image();
mario_j_r.src = "../img/mrlf_j_r_1.png";//오른쪽 점프 이미지
let mario_L_img = new Image();
mario_L_img.src = "../img/mrlf_L_1.png";
let mario_L_img2 = new Image();
mario_L_img2.src = "../img/mrlf_L_2.png";
let mario_j_l = new Image();
mario_j_l.src = "../img/mrlfj_1.png";//왼쪽 점프 이미지


//마리오 좌표
let mario_x = 170;
let mario_y = 470;

//마리오 크기
let mario_w = 50;
let mario_h = 50;


//버섯몬스터
let gbw_1_img = new Image();
gbw_1_img.src = "../img/gbw_1.png" //버섯1
let gbw_2_img = new Image();
gbw_2_img.src = "../img/gbw_2.png" //버섯2


let bMove = false;
let bLR = false;
let bJump = false;

//배경
let background_image = new Image;
background_image.src = "../img/bg.png"





//js 초기화
window.onload = function () {
    // console.log("js 초기화");
}

//jquery 초기화
$(document).ready(function () {
    // console.log("jquery 초기화")
});

//jquery 약식 초기화
//클릭 이벤트
$(function () {
    // console.log("jquery약식");
    $("#start").click(startGameTimer);
    $("#stop").click(stopTimer);
})

//startGameTimer()
function startGameTimer() {
    // console.log("startGameTimer()호출")

    //가져올 canvas 태그 위치 찾기
    const marioCanvas = document.getElementById("marioCanvas");
    // console.log(`marioCanvas:[${marioCanvas}]`);


    //그림도구 가져오기
    canvse = marioCanvas.getContext("2d");
    // console.log(`canvse:[${canvse}]`);

    //프레임 시작
    startTimer();
}

//------------------------------------------
//캐릭터 생성(반복 시간이들어감 프레임)
function startTimer() {
    if (timer == null) {
        timer = setInterval(timerProc, 10)
    }
}

//어떤걸 계속 그릴지
function timerProc() {
    // console.log(`timerProc()호출`)

    //캐릭터 그리기호출
    backgroundImage();
    drawCharacter();



}
//--------------------------------------------

//마리오 이동
window.onkeydown = function (event) {
    console.log(event.code);
    if (event.code == "ArrowRight") {
        mario_x += 15;
        if (mario_x % 2 == 0) {
            bMove = false;
            bLR = false;
        } else {
            bMove = true;
            bLR = false;
        }
    }
    if (event.code == "ArrowLeft") {
        mario_x -= 15;
        if (mario_x % 2 == 0) {
            bMove = false;
            bLR = true;

        } else {

            bMove = true;
            bLR = true;
        }
    }
    if (event.code == "Space") {
        if (mario_y < 471) {
            if (mario_y == 470) {
                mario_y -= 80;
                bJump = true;
            }

        }
    }
    if (event.code == "Space" && event.code == "ArrowRight") {
        mario_x += 5;
        mario_y -= 10;
    }
    if (event.code == "ArrowDown") {
        console.log(mario_h);
        if (mario_y >= (470)) {

        } else {
            mario_y += 5;

        }
    }
}


//--------------------------------------------

//캐릭터그리기
function drawCharacter() {
    // console.log(`drawCharacter()호출`);

    canvse.drawImage(gbw_1_img, 700, 470, 50, 50)
    // canvse.drawImage(gbw_2_img,200,200,50,50)


    if (bMove == false && bLR == false && bJump == false) {
        //오른쪽 멈춰있는 마리오
        canvse.drawImage(mario_img, mario_x, mario_y, mario_w, mario_h);
    }
    if (bMove == true && bJump == false && bLR == false) {
        //오른쪽 움직이는 마리오
        canvse.drawImage(mario_img2, mario_x, mario_y, mario_w, mario_h);
    }


    if (bMove == false && bLR == true && bJump == false) {
        //왼쪽 멈춰있는 마리오
        canvse.drawImage(mario_L_img, mario_x, mario_y, mario_w, mario_h);
    }
    if (bMove == true && bLR == true && bJump == false) {

        //왼쪽 움직이는 마리오
        canvse.drawImage(mario_L_img2, mario_x, mario_y, mario_w, mario_h)
    }


    //점프했다가 떨어지는 마리오
    if (mario_y <= 469) {
        mario_y -= -2;

        console.log(mario_y);
    }



    //점프했을때 마리오
    if (bJump == true && bLR == false) {
        
        canvse.drawImage(mario_j_r, mario_x, mario_y, mario_w, mario_h);
        if (mario_y == 470) {
            bJump = false;
        }
        
    }
    if (bJump == true && bLR == true) {
        canvse.drawImage(mario_j_l, mario_x, mario_y, mario_w, mario_h);
        if (mario_y == 470) {
            bJump = false;
        }
    }
}
//캐릭터지우기
function drawCharacterDelete() {
    canvse.clearRect(0, 0, GAMEPAN_WIDTH, GAMEPAN_HEIGHT);
}


//-------------------------------------------

//멈추기
function stopTimer() {
    // console.log("stopTimer()호출")
    clearInterval(timer);
    timer = null;
    drawCharacterDelete();
}

//배경그리기
function backgroundImage() {
    // console.log("backgroundImage()호출")
    canvse.drawImage(background_image, 0, 0, GAMEPAN_WIDTH, GAMEPAN_HEIGHT);
}
//--------------------------------------------