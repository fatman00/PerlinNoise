var cols, rows;
var scl = 20;
var w = 500;
var h = 500;
var noisescl= 0.2;
var noiseval = 0;
var noiseinc = 0.02;
var numparticles = 300;

var flying = 0;

var terrain = [];
var flowfield = [];

var particles = [];

function setup() {
  createCanvas(w, h);
  cols = w/ scl;
  rows = h/ scl;
  for(var i = 0; i < numparticles;i++){
    particles[i] = new Particle();
  }
  flowfield = new Array(cols*rows);
}
function draw() {
  background(255);
  // noiseSeed(noiseval);
  stroke(0);
  for(var i = 0; i < cols; i++) {
    for(var j = 0;j<rows;j++) {
      // Gennerate Perlin Noise from the X,Y coordinates, scale it and map it to BW color scale
      var dir = map(noise(i*noisescl,j*noisescl,noiseval),0,1,0,TWO_PI);
      var dirvec = p5.Vector.fromAngle(dir);
      var index = j*cols+i;
      flowfield[index] = dirvec;
      stroke(0, 50);
      push();
      translate(i*scl,j*scl);
      rotate(dirvec.heading());
      line(0,0,scl,0);

      pop();
    }
  }
  for(var i = 0; i < particles.length;i++){
    particles[i].follow(flowfield);
    particles[i].update();
    particles[i].show();
    particles[i].edges();
  }
  //noLoop();
  noiseval+=noiseinc;
  //fr.html(floot(frameRate()));
}
