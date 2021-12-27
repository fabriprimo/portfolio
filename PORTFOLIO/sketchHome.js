var canvas;

let images = [];

function windowResized(){
    
    resizeCanvas(windowWidth, windowHeight);
}

function preload() {
    images[0] = loadImage('assets/DEA.png');
    images[1] = loadImage('assets/DEGEN.png');
    images[2] = loadImage('assets/CAFE_MULLER_SITO.png');
    images[3] = loadImage('assets/SBARAU.png');
    images[4] = loadImage('assets/CAZZAROLA1.png');
    images[5] = loadImage('assets/SBARAU.png');
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 0);
    canvas.style('z-index', '-1');

  for (let i = 0; i < images.length; i++) {
      image(images[i], i*200, 0, 600/3, 450/3);
 
    images[i].resize(width, height);
  }
}


function draw() {
  background(0);
  noStroke();
  fill(0);
  push();
  fill(255);
  blendMode(EXCLUSION);
  let selector = int(map(mouseX, 0, width, 0, images.length));
 
    
  image(images[selector], 0, 0);
  ellipse(mouseX, mouseY, 20, 20);
     pop();

  for (let i = 1; i < images.length; i++) {
    rect(i*width/images.length, 0, 1, height);
  }
    
    //rect(0, 100, width, 1);
}