song2_isPlaying = "";
song1_isPlaying = "";
song="";
leftWristX =0;
leftWristY =0;
rightWristX=0;
rightWristY=0;
score = 0;

console.log("now will this work plz!");
function preload(){
    song1 = loadSound("Song1.mp3");
    song2 = loadSound("Song2.mp3");
    console.log("REALLY IS THIS WORKING!!!?!??!?!?!?");
}
    
function setup(){
    canvas = createCanvas(600,500);
    canvas.center();
    
    video = createCapture(VIDEO);
    video.hide();
    console.log("is this workin!!?!?!?!!?!?");

    posenet = ml5.posenet("poseNet", modelLoaded);
    posenet.on("on",gotPoses);
}
    
function draw(){
    image(video,0,0,600,500);
    
    fill("#FF0000")
    stroke("#000000")
    song1_isPlaying = song1.isPlaying()


if(score>0.2) 
{
circle(leftWristX, leftWristY, 20);
song2.stop();
if(song1_isPlaying = false){
   song1.play() ;
   document.getElementById("song_name").innerHTML = "OverTaken";
}
}
}
    
function play(){
    song1.play();
    console.log("did dis play?");
    song1.setVolume(1);
    song1.rate(1);
}

function modelLoaded(){
    console.log("the pose net has started")
}

function gotPoses(results){
if(results.length>0){

console.log(results);
score = results[0].pose.keypoints[9].score;
console.log("Left Wrist Score: "+score);

leftWristX = results[0].pose.leftWrist.x;
leftWristY = results[0].pose.leftWrist.y;
console.log("the left wrist X is "+leftWristX+" and the Y is "+leftWristY+".")

rightWristX = results[0].pose.rightWrist.x;
rightWristY = results[0].pose.rightWrist.Y;
console.log("the right wrist X is "+rightWristX+" and the Y is "+rightWristY+".")
}
}