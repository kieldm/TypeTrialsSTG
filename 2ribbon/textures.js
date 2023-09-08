//////////////////////////////////////////////
/////////////////////////////       TEXT
//////////////////////////////////////////////

function drawText(){
  var pgTextSize = 200;

  textSize(pgTextSize);
  textFont(thisFont);
  var repeatSize = round(textWidth(keyText)) * 1.1;

  pgA = createGraphics(repeatSize, pgTextSize * (thisFontFactor + 0.1));

  pgA.background(foreColor);
  pgA.fill(bkgdColor);

  pgA.noStroke();
  pgA.textSize(pgTextSize);
  pgA.textAlign(CENTER);
  pgA.textFont(thisFont);
  pgA.text(keyText, pgA.width/2, pgA.height/2 + pgTextSize * thisFontFactor/2);

  pgB = createGraphics(repeatSize, pgTextSize * (thisFontFactor + 0.1));

  pgB.background(bkgdColor);
  pgB.fill(foreColor);

  pgB.noStroke();
  pgB.textSize(pgTextSize);
  pgB.textAlign(CENTER);
  pgB.textFont(thisFont);
  pgB.text(keyText, pgA.width/2, pgA.height/2 + pgTextSize * thisFontFactor/2);
}