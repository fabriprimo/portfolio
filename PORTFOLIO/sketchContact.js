// noprotect 
var canvas;
var sw, alpha;
var yStep = 10;
var arcSize = 200;

function windowResized(){
    
    resizeCanvas(windowWidth, windowHeight);
}

function setup(){
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 0);
    canvas.style('z-index', '-1');


}
function draw(){
  background(0);

    translate(0,-700);
  
  mouseX = constrain(mouseX,10, width); 
  mouseY = constrain(mouseY,10, height);
  
   yStep = mouseY/2;
   arcSize = mouseX/2;
  
  noFill();
  stroke(255);
  
  for (var y=+arcSize/2; y<2000; y+=yStep){
    sw = map(sin(radians(y+alpha)), -1, 1, 2, yStep);
    strokeWeight(sw);
    for (var x1=arcSize/2; x1<width+arcSize; x1+=arcSize){
      arc(x1, y, arcSize/2, arcSize/2, 0, PI);
      }
      sw = map(sin(radians(y-alpha)), -1, 1, 2, yStep);
      strokeWeight(sw);
      for (var x2=0; x2<width+arcSize; x2+=arcSize){
      arc(x2, y, arcSize/2, arcSize/2, PI, TWO_PI);
  }
  }
  alpha++;  

}
