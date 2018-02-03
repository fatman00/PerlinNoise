var cols, rows;
var scl = 20;
var w = 500;
var h = 500;
var noisescl= 0.15;
var noiseval = 0;

var flying = 0;

var terrain = [];

function setup() {
  createCanvas(w, h);
  cols = w/ scl;
  rows = h/ scl;
  pixelDensity(1);
}

function draw() {
loadPixels();
  for(var i = 0; i < width; i++) {
    for(var j = 0;j<height;j++) {
      var index = (i+j*width)*4;
      var r = random(255);
      pixels[index+0] = r;
      pixels[index+1] = r;
      pixels[index+2] = r;
      pixels[index+3] = 255;
    }
  }
  updatePixels();
  noLoop();
}
