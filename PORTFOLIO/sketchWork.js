var canvas;

function windowResized(){
    
    resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 0);
    canvas.style('z-index', '-1');
    
    
}

function draw(){
    
    background(0);
    
    push();
    fill(255);
    blendMode(EXCLUSION);
    ellipse(mouseX, mouseY, 20, 20);
    pop();
  
}

