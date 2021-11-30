//Sourced from sketch5 Posenet Examples-Modified by Christian Gomes Novemeber/29th/2021--Start--
// this is a very simple sketch that demonstrates how to place a video cam image into a canvas

let video;
let pose;

function setup(){
    
//The Canvas was Modifed from 640,480 to 2000,2000
createCanvas(2000, 2000);
    
video = createCapture(VIDEO);
video.hide();
poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses)    
}

function modelLoaded(){
    console.log("modelLoaded function has been called so this work!!!!");
};

function gotPoses(poses){
    console.log(poses);
    if( poses.length >0 ){
        pose = poses[0].pose;
    } 
    
} 

function draw(){
//The Image Video was Modifed from 0,0 to 2000,2000
image(video,2000, 2000);
    
    
//code Sourced from:https://p5js.org/reference/#/p5/background--Start--
background (51);
//code Sourced from:https://p5js.org/reference/#/p5/background--End--
    
if(pose){
    //The fill was modified from (255,0,0) to(255,102,102)
    fill(255,102,102);
    
    //The pose was modified from pose.nose.x and pose.nose.y to pose.leftEar.x and pose.leftEar.y
    //The ellipse size was modified from 10 t0 150
     ellipse(pose.leftEar.x, pose.leftEar.y, 150);
}    
 
    if(pose){
        
    //The fill was modified from (255,0,0) to(255,102,102)  
    fill(255,102,102);
        
    //The pose was modified from pose.nose.x and pose.nose.y to pose.rightEar.x and pose.rightEar.y
    //The ellipse size was modified from 10 t0 150
     ellipse(pose.rightEar.x, pose.rightEar.y, 150);
}
    
    if(pose){
        
    //The fill stayed the same colour it originally was in the Sketch5 Posenet Example
    fill(255,0,0);
    
    //The pose stayed the same pose it was originally in the Sketch5 Posenet Example
    //The ellipse size was modified from 10 t0 200
     ellipse(pose.nose.x, pose.nose.y, 200);
    }
    
}
// I will add a posenet array for another colour entirely for another person when theyre in frame
    
//Sourced from sketch5 Posenet Examples-Modified by Christian Gomes Novemeber/29th/2021--End--