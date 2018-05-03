
var num = 2000;
var range = 6;

//position of point
var posX = [];
var posY = [];


function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
  for ( var i = 0; i < num; i++ ) {
    posX[i] = width / 3;
    posY[i] = height / 3;
  }
  frameRate(50);
}

function draw() {
  background(0);

  // 2 points to left
  for ( var i = 1; i < num; i++ ) {
    posX[i - 1] = posX[i];
    posY[i - 1] = posY[i];
  }

  // Put a new value at the end of the array
  posX[num - 1] = posX[num - 1] + random(-50, 50);
  posY[num - 1] = posY[num - 1] + random(-50, 50);

  // Constrain all points to the screen
  posX[num - 1] = constrain(posX[num - 1], 0, width);
  posY[num - 1] = constrain(posY[num - 1], 0, height);

  // Draw a line connecting the points
  for ( var j = 1; j < num; j++ ) {
    var val = j*.65 / num * 255.0 + 51;
    stroke(val);
      strokeWeight(5);
    line(posY[j - 2], posX[j - 2], posY[j+1], posX[j]);
      line(posX[j - 4], posY[j - 1], posX[j-2], posY[j]);

      
  }
}
