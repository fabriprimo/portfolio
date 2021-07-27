function windowResized(){
    
    resizeCanvas(windowWidth, windowHeight);
}
function setup(){
  
   canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 0);
    canvas.style('z-index', '-1');
    frameRate(10);


}

function draw(){

    background(0);
    noStroke();
let fx = map(mouseX, 0, width, 0, 255);

for (let i=0; i<10; i++){
    fill(fx);
    ellipse(random(width), random(height), i*20, i*20);

}
}

