  var r = 255;
  var g = 255;
  var b = 255;




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
  directionalLight(r, g, b, dirX, dirY, dirZ);
  specularMaterial(250);
  shininess(50);
  
  push();

  //rotateY(radians(frameCount));
  //rotateX(radians(map(mouseY, 0, width, -100, 100)));
  //rotateZ(radians(frameCount));
  //box(400, 100, 100);
  
  pop();
  
  torus(300, 20, 200, 200);
  

  

  
}

function keyPressed() {

    r = Math.round(random(255));
    g = Math.round(random(255));
    b = Math.round(random(255));
  
    print(r, g, b);
  
  
  

}

