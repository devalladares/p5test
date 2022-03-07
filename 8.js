// maurrier

let num1, num2
let namer = 1

let size = 350

let slider1, slider2


let fore = 0
let back = 255


function setup() {
  createCanvas(800, 800);

  slider1 = createSlider(1.000, 1000.000, 22.700, 0.001)
  slider2 = createSlider(1.000, 1000.000, 4.000, 0.001)

  valueDisplayer1 = createP()
  valueDisplayer2 = createP()
  valueDisplayer1.position(50, height + 20)
  valueDisplayer2.position(200, height + 20)

  randomboi = createButton('Random');
  // randomboi.position(220, height + 20)
  randomboi.mousePressed(randommer);
  randomboi.size(200, 50);

  saverboi = createButton('Save');
  // saverboi.position(220, height + 20)
  saverboi.mousePressed(saver);
  saverboi.size(200, 50);


}

function reset() {
  background(back);
  noFill()
  // fill(fore)
  // stroke(fore, 80)
  stroke(fore)
  // strokeWeight(1)

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

    let r = sin(a * k) * (size * 2)

    let x = r * cos(a) / 2
    let y = r * sin( a) / 2

    vertex(x, y)
    // point(x, y)
    // ellipse(x, y, 10)

  }

  endShape()
  pop()

}

function draw() {
  if (slider1.changed) {
    reset()
  }
  if (slider2.changed) {
    reset()
  }
}

function randommer() {

  j = random(0.0001, 1000.000)
  k = random(0.0001, 100.000)

  slider1.value(j)
  slider2.value(k)

  console.log(num1)
  reset()

}

function saver() {
  saveForPrint("sketch.png", "A2", 300);
}