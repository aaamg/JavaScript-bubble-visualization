let bubble1, bubble2;


function setup() {
  createCanvas(600, 400);
  bubble1 = new Bubble();
  bubble2 = new Bubble();
  //print(bubble.x, bubble.y);
}

function draw() {
  background(0);
  bubble1.move();
  bubble1.show(175, 100, 820);
  bubble2.move();
  bubble2.show(179, 300, 500);
}

class Bubble {
  constructor() {
    this.x = 200;
    this.y = 150;  
  }
  
  move() {
    this.x = this.x + random(-5, 5);
    this.y = this.y + random(-5, 5);
  }
  
  show(a, b, d) {
    stroke(255);
    strokeWeight(4);
    let c = color(a, b, d);
    fill(c);
    ellipse(this.x, this.y, 24, 24);
  }
}

// function setup() {
//   createCanvas(640, 480);
// }

// function draw() {
//   ellipse(90, 90, 80, 80);
// }

//https://editor.p5js.org/ download p5 js libray to work!! 