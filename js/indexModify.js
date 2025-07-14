
const BACKGROUND_WIDTH = 3135;
const GAMEPAN_WIDTH = 800;
const GAMEPAN_HEIGHT = 750;
let canvse = null;
let timer = null;


//스크린좌표
let scrollX = 0;
let scrollY = 0;

//마리오 이미지
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
let box_1_x = 800;
let box_1_y = 450;
let bBox_1 = false;



//굼바
let gbw_1_img = new Image();
gbw_1_img.src = "../img/gbw_1.png" //굼바1
let gbw_2_img = new Image();
gbw_2_img.src = "../img/gbw_2.png" //굼바2

//굼바좌표
let gbw_1_x = 1200;
let gbw_1_y = 600;



//배경
let background_image = new Image;
background_image.src = "../img/bg1_1.png"
let bBackground_x = false;


//동작 여부
let bMove = false; //움직임
let bLR = false; //좌우방향
let bJump = false; //점프여부

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
        timer = setInterval(timerProc, 1000 / 24)
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

// 마리오 스프라이트를 변수로 변환    
function walkL1() { canvse.drawImage(mario_img, mario_x, mario_y, mario_w, mario_h) }; //왼쪽 걷는 그림 1
function walkL2() { canvse.drawImage(mario_img2, mario_x, mario_y, mario_w, mario_h) }; //왼쪽 걷는 그림 2
function walkR1() { canvse.drawImage(mario_L_img, mario_x, mario_y, mario_w, mario_h) }; //오른쪽 걷는 그림 1
function walkR2() { canvse.drawImage(mario_L_img2, mario_x, mario_y, mario_w, mario_h) }; //오른쪽 걷는 그림 2
function jumpL() { canvse.drawImage(mario_img2, mario_x, mario_y, mario_w, mario_h) }; //왼쪽 점프
function jumpR() { canvse.drawImage(mario_j_r, mario_x, mario_y, mario_w, mario_h) }; //오른쪽 점프

let walkToggle = false;

let keyState = {}; // 키보드 입력 상태

window.onkeydown = function (event) {
    keyState[event.code] = true;
};

window.onkeyup = function (event) {
    keyState[event.code] = false;
};

setInterval(function () {
    timerProc();
    //마리오 이동
    if (keyState["ArrowRight"]) {
        if (mario_x < GAMEPAN_WIDTH / 2){
            mario_x += 10;
        } else if (scrollX< BACKGROUND_WIDTH - GAMEPAN_WIDTH) {
            scrollX += 10;
        }
        bMove = true;
        bLR = false;
        walkToggle = !walkToggle;      
    } // 오른쪽 이동
    else if (keyState["ArrowLeft"]) {
        if (keyState["ArrowRight"]) {
            mario_x -= 10;
        } else if (mario_x > GAMEPAN_WIDTH / 2) {
            scrollX += 10;
        }
        bMove = true;
        bLR = true;
        walkToggle = !walkToggle;
    } // 왼쪽이동 
    else {
        bMove = false;
    } // 움직이지 않음

    if (keyState["KeyZ"] && mario_y === MARIO_Y_INITIAL) {
        bJump = true;
    } // 점프키 Z를 누르면 점프 시작

    if (bJump) {
        mario_y -= 10;
        if (mario_y <= MARIO_Y_INITIAL - 250) {
            bJump = false;
        }
    } else if (mario_y < MARIO_Y_INITIAL) {
        mario_y += 5;
        if (mario_y > MARIO_Y_INITIAL) mario_y = MARIO_Y_INITIAL;
    } // 점프 중일 때 Y좌표 조정, 바닥에 닿으면 초기화
      // end: onkeydown
      //end : 마리오 이동

    //상자 좌표
    console.log(`bBox_1:${bBox_1}`);
    console.log(`box_1_y:${box_1_y}`);
    console.log(`mario_y:${mario_y}`);
    console.log(`box_1_x:${box_1_x}`);
    console.log(`scrollX:${scrollX}`);

    if (box_1_y + 50 > mario_y) {
        bBox_1 = true;
    }
    //end : 상자좌표

    //스크린 좌표
    if (bBackground_x == false && 0 <= scrollX && scrollX < BACKGROUND_WIDTH) {
        if (keyState["ArrowRight"]) { scrollX += 10; }
        if (keyState["ArrowLeft"]) { scrollX -= 10; }
    }
    //왼쪽 끝에 닿으면 멈춤
    if (scrollX == -10) {
        if (keyState["ArrowRight"]) { scrollX += 10; }
    }
    //오른쪽 끝에 닿으면 멈춤
    if (scrollX == BACKGROUND_WIDTH) {
        if (keyState["ArrowLeft"]) { scrollX -= 10; }
    }
    // if (event.code=="ArrowDown") scrollY += 5;
    // if (event.code=="ArrowUp") scrollY -= 5;
    //end : 스크린 좌표

}, 1000 / 24)

//--------------------------------------------



//--------------------------------------------

//캐릭터그리기
function drawCharacter() {
    // console.log(`drawCharacter()호출`);

    //버섯캐릭터
    canvse.drawImage(gbw_1_img, gbw_1_x - scrollX * 2, gbw_1_y, 50, 50)
    // console.log(`버섯 : ${gbw_1_x},${gbw_1_y}` );
    // console.log(`스크린 : ${scrollX},${scrollY}` );
    // console.log(`마리오 : ${mario_x},${mario_y}` );
    // console.log(`상자1 : ${box_1_x},${box_1_y}` );

    // canvse.drawImage(gbw_2_img,200,200,50,50)


    //마리오 이미지 그리기
    if (bJump) {
        if (bLR) {
            jumpL();
        } else {
            jumpR();
        }
    } else if (bMove) {
        if (bLR) {
            walkToggle ? walkR2() : walkR1();
        } else {
            walkToggle ? walkL2() : walkL1();
        }
    } else {
        if (bLR) {
            walkR1();
        } else {
            walkL1();
        }
    }
    if (mario_x < GAMEPAN_WIDTH / 2) {
        scrollX = mario_x - GAMEPAN_WIDTH / 2;
    }


    //점프했다가 떨어지는 마리오
    if (mario_y <= MARIO_Y_INITIAL - 1) {
        mario_y += 5;
    }
    if (bJump == true) {
        mario_y -= 10;
        if (mario_y == MARIO_Y_INITIAL - 250) {
            bJump = false;
        }
    }



    //점프했을때 마리오
    if (bJump == true && bLR == false) {

        walkL2();
        if (mario_y == MARIO_Y_INITIAL) {
            bJump = false;
        }

    }
    if (bJump == true && bLR == true) {
        walkR2();
        if (mario_y == MARIO_Y_INITIAL) {
            bJump = false;
        }
    }



    //상자 이미지
    if (bBox_1 == false) {
        canvse.drawImage(box_1_img, box_1_x - scrollX * 3.13, box_1_y, 50, 50);
    }
    if (bBox_1 == true) {

        if (box_1_y <= 350) {
            box_1_y += 1;
            console.log(box_1_y);
        }
        if (box_1_y == 360) {
            bBox_1 = false;
            console.log(box_1_y);
        }
        canvse.drawImage(box_1_img, box_1_x - scrollX * 3.13, box_1_y, 50, 50);
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
    } else if (scrollX >= BACKGROUND_WIDTH) {
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