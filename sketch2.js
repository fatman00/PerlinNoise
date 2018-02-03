var cols, rows;
var scl = 15;
var w = 500;
var h = 500;
var noisescl= 0.15;
var noiseval = 0;
var noiseinc = 0.02;

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
      var dir = map(noise(i*noisescl,j*noisescl,noiseval),0,1,0,TWO_PI);
      var dirvec = p5.Vector.fromAngle(dir);
      stroke(0);
      push();
      translate(i*scl,j*scl);
      rotate(dirvec.heading());
      line(0,0,scl,0);

      pop();
    }
  }
  //noLoop();
  noiseval+=noiseinc;
  //fr.html(floot(frameRate()));
}
