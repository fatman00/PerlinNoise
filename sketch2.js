var cols, rows;
var scl = 10;
var w = 500;
var h = 500;

var flying = 0;

var terrain = [];

function setup() {
  createCanvas(w, h);
  cols = w/ scl;
  rows = h/ scl;
}



// function draw() {
//   background(50);
//   stroke(255);
//   noFill();
//   beginShape();
//   var xoff=0;
//   for (var x = 0; x < width;x++){
//     var y = noise(xoff) * height;
//     vertex(x,y);
//     xoff+=0.02
//   }
//   endShape();
// }
// function draw() {
//   if(mouseIsPressed) {
//     fill(0);
//   } else {
//     fill(255);
//   }
//   ellipse(mouseX, mouseY, 80,80);
//
// }

function draw() {
  // for(var i = 0; i < terrain.length;i++) {
  //
  // }
  background(100);
  stroke(0);
  // fill(255);
  var xoff= 0.2;
  for(var i = 0; i < cols; i++) {
    for(var j = 0;j<rows;j++) {
      // Gennerate Perlin Noise from the X,Y coordinates, scale it and map it to BW color scale
      fill(map(noise(i*xoff,j*xoff),0,1,0,255));
      rect(i*scl,j*scl,scl-1,scl-1);
    }
  }
  // rect(50,50,80,80);

  noLoop();
}
