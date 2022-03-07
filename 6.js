// maurrier

let num1, num2
let namer = 1

let size = 350

let slider1, slider2


let fore = 255
let back = 0


function setup() {
  createCanvas(800, 800);

  slider1 = createSlider(1, 1000, 22.7, 0.01)
  slider2 = createSlider(1, 1000, 4, 0.01)

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
  push()

  num1 = slider1.value()
  num2 = slider2.value()

  valueDisplayer1.html(slider1.value())
  valueDisplayer2.html(slider2.value())


  translate(width / 2, height / 2)
  // beginShape()

  // rotate(frameCount * 0.001)

  for (let a = 0; a < TAU * num2; a += 0.01) {

    // let r = 200
    let k = num1 / num2

    let r = sin(a * k) * size

    let x = r * cos(a)
    let y = r * sin(a)

    stroke(fore, 255)
    // strokeWeight(0.5)
    // vertex(x, y)
    point(x, y)

  }

  // endShape()
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

  j = random(0.001, 1000.000)
  k = random(0.001, 1000.000)
  
  slider1.value(j)
  slider2.value(k)

  console.log(num1)
  reset()

}

function saver() {
  saveForPrint("sketch.png", "A2", 300);
}