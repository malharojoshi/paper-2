class Trash {
  constructor(x, y) {
    var options = {
      restitution: 0.7,
      friction: 0.5,
      density: 1.2,
    };
    this.body = Bodies.rectangle(x, y, 50, 50, options);
    this.image = loadImage("paper.png");
    World.add(world, this.body);
    this.width = 50;
    this.height = 50;
  }
  display() {
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(this.body.angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();
  }
}
