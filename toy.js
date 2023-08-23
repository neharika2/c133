Status = "";
toy_image="";
function preload(){
    toy_image = loadImage("image-removebg-preview.png");
}
function setup(){
    canvas=createCanvas(640,350);
    canvas.position(315,200 );
    object_detector=ml5.objectDetector('cocossd',modelloaded);
    document.getElementById('status')
}
function modelloaded(){
    console.log("model is loaded");
    Status=true;
    object_detector.detect(toy_image,gotResults);
}
function gotResults (){
    if(error){
        console.error(error);
    }
    console.log(results);
}
function draw(){
    image(toy_image,0,0,640,350);
    if(Status!=""){
        for(i=0;i<objects.length;i++){
            document.getElementById("status").innerHTML="Status:object is detected";
            fill("#fc0303");
            percent=floor(objects[i].confidence * 100);
            text(objects[i].label+" "+ percent+ "%",objecs[i].x,objects[i].y);
            noFill();
            stroke("#fc0303");
            rect(object[i].x,objects[i].y,objects[i].width,objects[i].height);
        }
    }
}