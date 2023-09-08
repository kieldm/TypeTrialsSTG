var tFont = [];
var thisFont;
var fontFactor = [];
var bkgdColor, foreColor;
var pgA;

var mainObject;

var keyText = "TYPETRIALS"

function preload(){
  tFont[0] = loadFont("resources/NeueMachina-Regular.otf");
  fontFactor[0] = 0.7;
  tFont[1] = loadFont("resources/NeueWorld-SuperCondensedLight.otf");
  fontFactor[1] = 0.7;
  tFont[2] = loadFont("resources/FormulaCondensed-Regular.otf");
  fontFactor[2] = 0.8;
  tFont[3] = loadFont("resources/NeueMontreal-Bold.otf");
  fontFactor[3] = 0.7;

  thisFont = tFont[0];
  thisFontFactor = fontFactor[0];
}

function setup(){
  createCanvas(windowWidth,windowHeight,WEBGL);

  bkgdColor = color('#FFFFFF');
  foreColor = color('#000000');

  document.getElementById("inputText").value = keyText;

  drawText();
  textureMode(NORMAL);

  mainObject = new Ribbon();
}

function draw(){
  background(bkgdColor);
  // orbitControl();
  ortho(-width/2, width/2, -height/2, height/2, -50000, 50000);

  mainObject.run();
}

function windowResized(){
  resizeCanvas(width, height, WEBGL);
}