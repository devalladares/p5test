function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(240);

  push()

  translate(width / 2, height / 2)

  for (let a = 0; a < TAU; a += 0.01) {

    // let r = 200
    let r = cos(a * 7) * 200

    let x = r * cos(a)
    let y = r * sin(a)

    stroke(0)
    strokeWeight(4)
    point(x, y)

  }

  pop()
}