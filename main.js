nose_x=0;
nose_y=0;

function preload(){
    NOSSSSSSYYYYYY=loadImage("https://i.postimg.cc/QCJfrXdv/NOSYYYYYY.png");
    NNNNNNNNNOSEEE=loadImage("https://i.postimg.cc/zBSQqwdd/NOSSSEEEEEEEEEEE.png");
    MUSSSSSSTTACHE=loadImage("https://i.postimg.cc/9ffPDdF8/imgbin-mustache-handlebar-moustache-template-handlebars-png.png");
}

//let capture;

function setup(){
    canvas=createCanvas(400, 450);
    canvas.position(775, 350);

    video = createCapture(VIDEO);
    video.size(400, 450);
    video.hide();

    posenet=ml5.poseNet(video, modelLoaded);

    posenet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("Model has been loaded...I think");
    console.log("Actually I am 100% sure it has been loaded correctly");
    console.log("Wait..Wait..Wait..Nevermind");
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        console.log("Maybe it is not working...Wait I think its working again...Nope not working");
        nose_x=results[0].pose.nose.x-45;
        nose_y=results[0].pose.nose.y;
        console.log("Nose x"+nose_x+"       "+"       "+"NOSSSSSSEEE");
        console.log("Nose y"+nose_y+"       "+"       "+"ACHOOOOOOOO");
    }

}

function draw(){
   image(video, 0, 0, 400, 450);
   image(MUSSSSSSTTACHE, nose_x, nose_y, 100, 40);
   //image(NNNNNNNNNOSEEE, nose_x, nose_y, 100, 80);
   //image(NOSSSSSSYYYYYY, nose_x, nose_y, 70, 60);

   //fill(254, 23, 3);
   //stroke(255, 255, 255);
   //circle(nose_x, nose_y, 35);
}

function TakeSnapshot(){
    save("Rudolphtherednoseraindeerhadaveryshinnynoseand4feetsantacalledhimtoridewithhim.png");
}




