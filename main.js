video = "";
dstatus="";
function preload(){
    video = createVideo('3.mp4');
    video.hide();
}

function setup(){
    canvas = createCanvas(480, 380);
    canvas.center();
}

function draw(){
    image(video, 0, 0, 480, 380);
}

function start()
{
    objectDetector = ml5.objectDetector('cocossd' , modelLoaded);
    document.getElementById("status").innerHTML = "STATUS : Detecting...";
}

function modelLoaded(){
    console.log("Model Loaded");
    dstatus = true;
    video.loop();
    video.speed(1);
    video.volume(0);
}