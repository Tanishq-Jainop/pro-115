var nose_x=0
var nose_y=0
function preload(){
clown_nose=loadImage('https://i.postimg.cc/7ZBcjDqp/clownnose.png')
}
function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300.00000000000000);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotPoses);
}