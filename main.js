const vehicles = [];
let moverA;
let moverB;

function setup() {
  background(100);
  createCanvas(500, 500);
  moverA = new Mover(width/2, height/2, 2);
  moverB = new Mover(width/2, height/2, 4);
}

function draw() {
  background(50);

  let gravity = createVector(0,0.4);

  if (mouseIsPressed) {
    let wind = createVector(0.2, 0)
    moverA.applyForce(wind);
    moverB.applyForce(wind);
  }

  let weightA = p5.Vector.mult(gravity, moverA.mass);
  let weightB = p5.Vector.mult(gravity, moverB.mass);
  moverA.applyForce(weightA);
  moverB.applyForce(weightB);

  moverA.update();
  moverA.edges();
  moverA.show();

  moverB.update();
  moverB.edges();
  moverB.show();

  
  
}