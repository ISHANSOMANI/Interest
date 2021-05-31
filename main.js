function setup(){
    video = createCapture(VIDEO);
    video.size(400,400);

    canvas = createCanvas(400,400);
    canvas.position(550,120);

    poseNet = ml5.poseNet(video,modeloaded);
    poseNet.on('pose',gotPoses);
}

function modeloaded(){
    console.log("PoseNet Is Intialized");
}


function draw(){
    background('#D4AF37');
}


function gotPoses(results){
if (results.length > 0){
    console.log(results);
}
}

