noseX =0;
noseY =0;
wistleftX= 0;
wistleftY= 0; 
wistrightX= 0;
wistrightY= 0;
diffrence= 0;
function setup(){

video = createCapture(VIDEO);

video.size(500,550); 

canvas = createCanvas(1000,650);

canvas.position(560,250);

poseNet=ml5.poseNet(video , modelloaded);

poseNet.on('pose' , gotPose);

}

function draw(){
    document.getElementById("res").innerHTML=diffrence;
    background("#595999");
    text("SARTHAK", noseX, noseY);
    fill("FFFFFF");   
    stroke("#000000");  
    textSize(diffrence);
} 

function modelloaded(){

    console.log("Model Is Loaded")

}
function gotPose(result){

if (result.length > 0){

console.log(result);
noseX=result[0].pose.nose.x;
noseY=result[0].pose.nose.y;
console.log("NoseX = " + noseX +  "  NoseY = " + noseY)
wistrightX= result[0].pose.rightWrist.x;
wistleftX= result[0].pose.leftWrist.x;
diffrence = floor( wistleftX - wistrightX);

}
}
