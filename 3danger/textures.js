//////////////////////////////////////////////
/////////////////////////////       TEXT SINGLE LINE
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

///////////////////////////////////////////////////////
/////////////////////////////       TEXT MULTIPLE LINES
///////////////////////////////////////////////////////

function drawTextLine(m){
  var pgTextSize = 200;

  textSize(pgTextSize);
  textFont(thisFont);
  var repeatSize = round(textWidth(keyArray[m])) * 1.1;

  var pgW = repeatSize;
  var pgH = pgTextSize * (thisFontFactor + 0.1);

  pg[m] = createGraphics(pgW, pgH);

  // pg[m].background(bkgdColor);
  pg[m].fill(foreColor);

  pg[m].noStroke();
  pg[m].textSize(pgTextSize);
  pg[m].textAlign(CENTER);
  pg[m].textFont(thisFont);
  pg[m].text(keyArray[m], pgW/2, pgH/2 + pgTextSize * thisFontFactor/2);
}

////////////////////////////////////////////////////////////////////
/////////////////////////////       TEXT MULTIPLE LINES - w/ Padding
////////////////////////////////////////////////////////////////////

function drawTextLinePadding(m){
  var pgTextSize = 200;
  var padding = 50;

  textSize(pgTextSize);
  textFont(thisFont);
  var repeatSize = round(textWidth(keyArray[m])) * 1.1;

  var pgW = repeatSize + padding * 2;
  var pgH = pgTextSize * (thisFontFactor + 0.1) + padding * 2;

  pg[m] = createGraphics(pgW, pgH);

  // pg[m].background(125);
  pg[m].fill(foreColor);

  pg[m].noStroke();
  pg[m].textSize(pgTextSize);
  pg[m].textAlign(CENTER);
  pg[m].textFont(thisFont);
  pg[m].text(keyArray[m], pgW/2, pgH/2 + pgTextSize * thisFontFactor/2);
}