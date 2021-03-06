// // maybe I can replace the rocket with a factory?
// // the rocket can be composed of actions
// //
//

function Rocket(dna){
  this.pos = createVector(width/2, height);
  this.vel = createVector();
  this.acc = createVector();
  this.completed = false;
  if (dna) {
    // update genes
    this.dna = dna;
    this.dna.writeGenes();
  } else {
    // write original dna
  this.dna = new DNA();
  }

  this.fitness = 0;
}

Rocket.prototype.boost = function () {
  //go somewhere
}

Rocket.prototype.applyForce = function(force) {
  console.log('force applied')
  this.acc.add(force);
}

Rocket.prototype.calcFitness = function() {
  var d = dist(this.pos.x, this.pos.y, target.x, target.y);
  this.fitness = map(d, 0, width, width, 0);
  if (this.completed){
    //this.fitness *= 10;
  }
}

Rocket.prototype.update = function(){
  console.log("updating")
  var d = dist(this.pos.x, this.pos.y, target.x, target.y);
  if (d < 10){
    this.completed = true
    this.pos = target.copy();
  }
  this.applyForce(this.dna.genes[count]);
  this.vel.add(this.acc);
  this.pos.add(this.vel);
  this.acc.mult(0);
}

Rocket.prototype.show = function(){
  push();
  noStroke();
  fill(255,100);
  translate(this.pos.x, this.pos.y)
  rotate(this.vel.heading());
  rectMode(CENTER);
  rect(0,0, 10, 50);
  pop();
}
