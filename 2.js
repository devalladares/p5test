let num1 = 213
let num2 = 7
let size = 350

let slider1, slider2


function setup() {
  createCanvas(800, 800);

  slider1 = createSlider(1, 1000, 21, 0.1)
  slider2 = createSlider(1, 1000, 4, 0.1)

  valueDisplayer1 = createP()
  valueDisplayer2 = createP()
  valueDisplayer1.position(50,height )
  valueDisplayer2.position(200,height )

}

function draw() {
  background(240);
  noFill()
  push()

  num1 = slider1.value()
  num2 = slider2.value()

  valueDisplayer1.html(slider1.value())
  valueDisplayer2.html(slider2.value())


  translate(width / 2, height / 2)

  beginShape()

  // rotate(frameCount * 0.001)

  for (let a = 0; a < TAU * num2; a += 0.01) {

    // let r = 200
    let k = num1 / num2

    let r = cos(a * k) * size

    let x = r * cos(a)
    let y = r * sin(a)

    // stroke(0)
    // strokeWeight(4)
    vertex(x, y)

  }

  endShape()

  pop()
}