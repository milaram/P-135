function setup(){

    canvas =  createCanvas(700,700);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    posenet = ml5.poseNet(video,modelLoaded);
    posenet.on('pose', getPoses);

}

alarm = loadSound("alarm.mp3");

function start(){

    if(object!=detected)
    {
        alarm.play()

    }

}


