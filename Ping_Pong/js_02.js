let can = document.getElementById("table");
let draw_ = can.getContext('2d');

const ball = {
    x:can.width/2,
    y:can.height/2,
    radius:10,
    velX :5,
    velY :5,
    speed :5,
    color :"green"
}

const user = {
    x:0,
    y:(can.height - 100)/2,
    width :10,
    height :100,
    score : 0,
    color : "red"
}

const cpu = {
    x : can.width -10 ,
    y : (can.height - 100)/2,
    width :10,
    height:100,
    score :0,
    color :"red"
}

const sep = {
    x : (can.width -2)/2,
    y :0,
    height :10,
    width :2,
    color :"orange"
}
function drawRectangle(x,y,w,h,color){
    draw_.fillStyle = color;
    draw_.fillRect(x,y,w,h);
}
function drawCircle(x,y,r,color){
    draw_.fillStyle = color;
    draw_.beginPath();
}

