function windowResized(){
    
    resizeCanvas(windowWidth, windowHeight);
}
function setup(){
  
   canvas = createCanvas(windowWidth, windowHeight, WEBGL);
    canvas.position(0, 0);
    canvas.style('z-index', '-1');
    


}

function draw(){

  var dirX = map(mouseX,0,width,1,-1);
  var dirY = map(mouseY,0,height,1,-1);
  var dirZ = -0.2;

  background(0);
  fill(255);
  noStroke();
  directionalLight(255, 255, 255, dirX, dirY, dirZ);
  push();
  //rotateY(radians(frameCount));
  //rotateX(radians(-frameCount));
  //rotateZ(radians(frameCount));
  //box(400, 100, 100);
  sphere(200);
  pop();
  
}

