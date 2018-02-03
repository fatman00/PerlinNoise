function Particle() {
  this.pos = createVector(random(width),random(height));
  // this.vel = p5.Vector.random2D();
  this.vel = createVector(0,0);
  this.acc = createVector(0,0);
  this.maxspeed = 3;

  this.update = function(){
    this.vel.add(this.acc);
    this.vel.limit(this.maxspeed);
    this.pos.add(this.vel);
    this.acc.mult(0)
  }

  this.applyForce = function(force) {
    this.acc.add(force);
  }
  this.show = function() {
    push();
    stroke(0);
    strokeWeight(4)
    point(this.pos.x, this.pos.y);
    pop()
  }
  this.edges = function() {
    if(this.pos.x>width) this.pos.x = 0;
    if(this.pos.x<0) this.pos.x = width;
    if(this.pos.y>height) this.pos.y = 0;
    if(this.pos.y<0) this.pos.y = height;
  }
  this.follow = function(vectors) {
    var x = floor(this.pos.x/scl);
    var y = floor(this.pos.y/scl);
    var index = x*cols + y;
    var force = vectors[index];
    this.applyForce(force);
  }
}
