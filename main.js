function setup(){
    canvas=createCanvas(640, 420);
    canvas.center();
}

var img="";

function preload(){
    img=loadImage('IMG_0022.jpg');
}

function draw(){
    image(img, 0, 0, 640, 420);
    fill("red");
    text("Air Conditioner", 135, 65);
    noFill();
    stroke("red");
    rect(120, 50, 200, 75);
    rect(400, 190, 200, 130);
    text("Television", 415, 205);
}