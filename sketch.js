var box1, box2;

function setup() {
  createCanvas(400, 400);

  box1 = new Box(100,100,30,45,2,-4);
  box2 = new Box(40,56,100,100,-7,1);
}

function draw() {
  background(220);

  box1.show();
  box2.show();

  box1.speed();
  box2.speed();


}