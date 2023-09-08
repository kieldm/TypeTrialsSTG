function setText(val){
  keyText = val;

  drawText();

  mainObject.refresh();
}

function setStripH(val){
  mainObject.stripH = map(val, 1, 100, 10, 500);

  mainObject.refresh();
}

function setFlowSpeed(val){
  mainObject.speed = map(val, 1, 100, 0, 1);

  mainObject.refresh();
}

function setFont(val){
  thisFont = tFont[val];
  thisFontFactor = fontFactor[val];

  drawText();

  mainObject.refresh();
}