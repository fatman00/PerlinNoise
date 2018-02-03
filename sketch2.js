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
}

function draw() {
  background(100);
  // noiseSeed(noiseval);
  stroke(0);
  for(var i = 0; i < cols; i++) {
    for(var j = 0;j<rows;j++) {
      // Gennerate Perlin Noise from the X,Y coordinates, scale it and map it to BW color scale
      // fill(map(noise(i*noisescl,j*noisescl),0,1,0,255));
      // rect(i*scl,j*scl,scl-1,scl-1);
      var dir = map(noise(i*noisescl,j*noisescl),0,1,0,TWO_PI);
      // var dirvec = new vec
      line(i*scl, j*scl,i*scl+cos(dir)*scl,j*scl+sin(dir)*scl);
    }
  }
  noLoop();
}
