function setText(val){
  keyText = val;
  keyArray = keyText.match(/[^\r\n]+/g);

  if(keyArray == null){
    keyArray = "";
  }

  print(keyArray);

  pg = [];
  for(var m = 0; m < keyArray.length; m++){
    // drawTextLine(m);
    drawTextLinePadding(m);
  }
  if(mainObject != null){
    mainObject.refreshText();
  }
}

function setFont(val){
  thisFont = tFont[val];
  thisFontFactor = fontFactor[val];

  setText(keyText);

  mainObject.refreshFont();
}

function setTumultAng(val){
  mainObject.tumultAngSize = map(val, 1, 100, 0, TWO_PI);
}

function setTumultAmp(val){
  mainObject.tumultAmpSize = map(val, 1, 100, 0, 200);
}