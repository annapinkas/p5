var diam1 = 0;
var r = 0;
var g = 0;
var b = 0;

function setup() {
 // put setup code here
    createCanvas(500,500);
    
}

function draw() {
  // put drawing code here
    background("#003366"); //dark blue bg
    fill("#FDEFFF");
    noStroke();
    ellipse(50,100,diam1,diam1);
    fill("#ADD8E6"); //light blue
    stroke("#FFFF00");
    strokeWeight(5);
    ellipse(width/2,height/2,20,20);
    fill(255,0,0); // red in rgb
    ellipse(mouseX,mouseY,mouseX/10,mouseY/10);
    rect(70,100,40,50);
    triangle(200,250,300,300,100,300);
    line(50,100,20,20);
    point(450,470);
    noStroke();
    textSize(20);
    textFont("Georgia");
    text("hello world!",350,400);
    textStyle(ITALIC);
    fill(r,g,b);
    ellipse(30,30,20, 20);
    console.log(mouseX, mouseY); 
}
function mousePressed(){
    if (diam1 >=50){
        diam1 = 0;
    }else{
        diam1 = diam1+5;
    }
    r = random(100,255);
    g = random(100,255);
    b = random(100,255);
}
