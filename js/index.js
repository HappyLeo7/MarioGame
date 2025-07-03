
const GAMEPAN_WIDTH = 1000;
const GAMEPAN_HEIGHT = 600;
let canvse = null;
let timer = null;

let mario_img = new Image();
mario_img.src= "../img/mario.png"; 



//js 초기화
window.onload = function () {
    console.log("js 초기화");
}

//jquery 초기화
$(document).ready(function () {
    console.log("jquery 초기화")
});

//jquery 약식 초기화
//클릭 이벤트
$(function () {
    console.log("jquery약식");
    $("#start").click(startGameTimer);
    $("#stop").click(stopTimer);
})

//startGameTimer()
function startGameTimer() {
    console.log("startGameTimer()호출")

    //가져올 canvas 태그 위치 찾기
    const marioCanvas = document.getElementById("marioCanvas");
    console.log(`marioCanvas:[${marioCanvas}]`);


    //그림도구 가져오기
    canvse = marioCanvas.getContext("2d");
    console.log(`canvse:[${canvse}]`);

    //프레임 시작
    startTimer();
}

//------------------------------------------
//캐릭터 생성(반복 시간이들어감 프레임)
function startTimer(){
    if(timer==null){
        timer= setInterval(timerProc,500)
    }
}

//어떤걸 계속 그릴지
function timerProc(){
console.log(`timerProc()호출`)

//캐릭터 그리기호출
drawCharacter();
backgroundImage();

}


//캐릭터그리기
function drawCharacter(){
console.log(`drawCharacter()호출`);
canvse.drawImage(mario_img,0,0,500,500);
}


//-------------------------------------------

//멈추기
function stopTimer(){
    console.log("stopTimer()호출")
    clearInterval(timer);
    timer=null;
    mario_img.src="";
    canvse.drawImage(mario_img,0,0);
}

//배경그리기
function backgroundImage(){
    canvse.drawImage();
}
