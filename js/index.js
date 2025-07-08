
const BACKGROUND_WIDTH = 3120;
const GAMEPAN_WIDTH = 800;
const GAMEPAN_HEIGHT = 750;
let canvse = null;
let timer = null;


//스크린좌표
let scrollX = 0;
let scrollY = 0;

//마리오
let mario_img = new Image(); mario_img.src = "../img/mrlf_1.png"; //오른쪽멈춘이미지
let mario_img2 = new Image(); mario_img2.src = "../img/mrlf_2.png"; //오른쪽이동이미지
let mario_j_r = new Image(); mario_j_r.src = "../img/mrlf_j_r_1.png";//오른쪽 점프 이미지
let mario_L_img = new Image(); mario_L_img.src = "../img/mrlf_L_1.png";//왼쪽멈춘이미지
let mario_L_img2 = new Image(); mario_L_img2.src = "../img/mrlf_L_2.png";//왼쪽이동이미지
let mario_j_l = new Image(); mario_j_l.src = "../img/mrlfj_1.png";//왼쪽 점프 이미지


//마리오 좌표
const MARIO_X_INITIAL = 170; //절대좌표X
let mario_x = MARIO_X_INITIAL; //변하는좌표x
const MARIO_Y_INITIAL = 600; //절대좌표Y
let mario_y = MARIO_Y_INITIAL; //변하는좌표y

//마리오 크기
let mario_w = 50;
let mario_h = 50;


//상자
let box_1_img = new Image(); box_1_img.src = "../img/qblk_1.png";

//상자 좌표
let box_1_x = 200;
let box_1_y = 360;
let bBox_1 = false;



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
background_image.src = "../img/bg1_1.png"
let bBackground_x = false;






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
        timer = setInterval(timerProc, 1000 / 60)
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

window.onkeydown = function (event) {
    //마리오 이동
    console.log(event.code);
    if (event.code == "ArrowRight") {
        // mario_x += 15;
        if (bMove == false) {
            bMove = true;
            bLR = false;
        } else {
            bMove = false;
            bLR = false;
        }
    }
    if (event.code == "ArrowLeft") {
        // mario_x -= 15;
        if (bMove == false) {
            bMove = true;
            bLR = true;

        } else {

            bMove = false;
            bLR = true;
        }
    }
    if (event.code == "Space") {
        if (mario_y < MARIO_Y_INITIAL + 1) {
            console.log(mario_y);
            if (mario_y == MARIO_Y_INITIAL) {
                console.log(mario_y);
                // mario_y -= 300;
                console.log(mario_y);
                bJump = true;
            }

        }
    }
    // if (event.code == "Space" && event.code == "ArrowRight") {
    //     mario_x += 5;
    //     mario_y -= 10;
    // }
    // if (event.code == "ArrowDown") {
    //     if (mario_y >= (600)) {

    //     } else {
    //         mario_y += 5;

    //     }
    // }
    //end : 마리오 이동

    //상자 좌표
    if (box_1_y + 30 == mario_y && box_1_x == mario_x) {
        box_1_y -= 30;

        bBox_1 = true;
    }
    //end : 상자좌표

    //스크린 좌표
    if (bBackground_x == false && 0 <= scrollX && scrollX < BACKGROUND_WIDTH) {
        if (event.code == "ArrowRight") { scrollX += 15; }
        if (event.code == "ArrowLeft") { scrollX -= 15; }
    }
       //왼쪽 끝에 닿으면 멈춤
    if (scrollX == -15) {
        if (event.code == "ArrowRight") { scrollX += 15; }
    }
         //오른쪽 끝에 닿으면 멈춤
    if (scrollX == BACKGROUND_WIDTH) {
        if (event.code == "ArrowLeft") { scrollX -= 15; }
    }
    // if (event.code=="ArrowDown") scrollY += 5;
    // if (event.code=="ArrowUp") scrollY -= 5;
    //end : 스크린 좌표


}

//--------------------------------------------



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
    if (mario_y <= MARIO_Y_INITIAL - 1) {
        mario_y += 5;

        // console.log(mario_y);
    }
    if (bJump == true) {
        mario_y -= 10;
        if (mario_y == MARIO_Y_INITIAL - 250) {
            bJump = false;
        }

    }



    //점프했을때 마리오
    if (bJump == true && bLR == false) {

        canvse.drawImage(mario_j_r, mario_x, mario_y, mario_w, mario_h);
        if (mario_y == MARIO_Y_INITIAL) {
            bJump = false;
        }

    }
    if (bJump == true && bLR == true) {
        canvse.drawImage(mario_j_l, mario_x, mario_y, mario_w, mario_h);
        if (mario_y == MARIO_Y_INITIAL) {
            bJump = false;
        }
    }

    //상자 이미지
    if (bBox_1 == false) {
        canvse.drawImage(box_1_img, box_1_x, box_1_y, 40, 40);
    }
    if (bBox_1 == true) {

        if (box_1_y <= 359) {
            box_1_y += 1;
            console.log(box_1_y);
        }
        if (box_1_y == 360) {
            bBox_1 = false;
            console.log(box_1_y);
        }
        canvse.drawImage(box_1_img, box_1_x, box_1_y, 40, 40);
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
    if (0 <= scrollX && scrollX < BACKGROUND_WIDTH) {
        console.log(scrollX)
        canvse.drawImage(background_image, scrollX, scrollY, 256, 240, 0, 0, GAMEPAN_WIDTH, GAMEPAN_HEIGHT);
    } else if (scrollX > BACKGROUND_WIDTH) {
        console.log(scrollX)
        // bBackground_x=true;
        canvse.drawImage(background_image, BACKGROUND_WIDTH, scrollY, 256, 240, 0, 0, GAMEPAN_WIDTH, GAMEPAN_HEIGHT);
    } else if (scrollX < 0) {
        console.log(scrollX)
        // bBackground_x=true;
        canvse.drawImage(background_image, 0, scrollY, 256, 240, 0, 0, GAMEPAN_WIDTH, GAMEPAN_HEIGHT);

    }
}
//--------------------------------------------