let earth;
let happyText;
let earthZoom = true;
let earthRotation = true;
let keyRotation;
// let rotationFrameCount = ;

function preload() {
earth = loadImage('Earth.jpeg');
happyText = loadImage('happy.png');
}

function setup() { 
  createCanvas(700, 700, WEBGL);
  createCanvas(700,700);
 // img = loadImage('assets/world.jpg');
  describe('a white sphere with black wireframe lines')
}

radius = 0;
function draw() {
  background('#8db33b');
  
    // push();
      // if (earthZoom === true && earthRotation === true){
  if (earthZoom === true && earthRotation === true){
      radius+=.5;
      keyRotation = rotateY(frameCount * 0.008);
      texture(earth);
     sphere(radius);
      noStroke();
      // }
  }
  else if (earthZoom === false && earthRotation === false){
      // else if (earthZoom === false && earthRotation === false){
      rotateY(frameCount * 0.005); 
        keyRotation = rotateY;
      texture(earth);
      sphere(radius);
      noStroke();
      // }
  // pop();
  }
    }

function keyPressed(){
  if (keyCode === 32){
    earthZoom = false;
    earthRotation = false;
  }
  else if (keyCode === LEFT_ARROW){
    keyRotation = rotateY(frameCount + 1);
  }
}
