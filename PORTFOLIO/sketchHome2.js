let moon;

function preload() {
  // Load model with normalise parameter set to true
  teapot = loadModel('assets/Moon 2K.obj', true);
}

function windowResized(){
    
    resizeCanvas(windowWidth, windowHeight);
}
function setup(){
  
   canvas = createCanvas(windowWidth, windowHeight, WEBGL);
    canvas.position(0, 0);
    canvas.style('z-index', '-1');

function draw() {
  background(200);
  scale(20); // Scaled to make model fit into canvas
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  normalMaterial(); // For effect
  model(teapot);
}
