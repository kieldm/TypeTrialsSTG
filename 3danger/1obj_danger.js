class Danger {
  constructor(){
    this.xSpacer = 10;
    this.ySpacer = 10;

    this.stripH = pg[0].height;
    this.stripW = [];
    this.xCount = [];
    this.yCount = this.stripH/this.ySpacer;

    this.lineCount = keyArray.length;

    this.tumultAngSize = PI;
    this.tumultAmpSize = 100;

    for(var m = 0; m < this.lineCount; m++){
      this.stripW[m] = pg[m].width * this.stripH/pg[m].height;
      this.xCount[m] = this.stripW[m]/this.xSpacer;
    }
  }

  run(){
    this.update();
    this.display();
  }

  update(){

  }

  display(){
    // stroke(0,0,255);
    noStroke();

    for(var m = 0; m < this.lineCount; m++){
      push();
        translate(0, -this.lineCount * this.stripH/2 + (this.lineCount - 1) * 50);
        translate(-this.stripW[m]/2, m * (this.stripH - 50 * 2));

        for(var nY = 0; nY < this.yCount; nY ++){  
          texture(pg[m]);

          beginShape(TRIANGLE_STRIP);
          for(var nX = 0; nX < this.xCount[m]; nX ++){
            var x = nX * this.xSpacer;
            var yTop = nY * this.ySpacer;
            var yBot = (nY + 1) * this.ySpacer;

            var noiseX = nX * 0.1 - frameCount * 0.01;
            var noiseYtop = (nY + m * this.yCount) * 0.1 + frameCount * 0.01;
            var noiseYbot = ((nY + 1) + m * this.yCount) * 0.1 + frameCount * 0.01;
            var noiseZ = frameCount * 0.01;
            var noiseAngTop = map(noise(noiseX, noiseYtop, noiseZ), 0, 1, -this.tumultAngSize, this.tumultAngSize) + PI;
            var noiseAngBot = map(noise(noiseX, noiseYbot, noiseZ), 0, 1, -this.tumultAngSize, this.tumultAngSize) + PI;

            var thisDistTop = dist(x, yTop, this.stripW[m], -50);
            var noiseAmpTop = 0;
            if(thisDistTop < this.stripW[m]/2){
              noiseAmpTop = map(thisDistTop, this.stripW[m]/2, 0, 0, this.tumultAmpSize);
            }
            var thisDistBot = dist(x, yBot, this.stripW[m], -50);
            var noiseAmpBot = 0;
            if(thisDistBot < this.stripW[m]/2){
              noiseAmpBot = map(thisDistBot, this.stripW[m]/2, 0, 0, this.tumultAmpSize);
            }

            var uNoiseTop = cos(noiseAngTop) * noiseAmpTop;
            var uNoiseBot = cos(noiseAngBot) * noiseAmpBot;
            var vNoiseTop = sin(noiseAngTop) * noiseAmpTop;
            var vNoiseBot = sin(noiseAngBot) * noiseAmpBot;
            // var uNoise = 0;
            // var vNoise = 0;

            var uTop = map(x + uNoiseTop, 0, this.stripW[m], 0, 1);
            var uBot = map(x + uNoiseBot, 0, this.stripW[m], 0, 1);
            var vTop = map(yTop + vNoiseTop, 0, this.stripH, 0, 1);
            var vBot = map(yBot + vNoiseBot, 0, this.stripH, 0, 1);

            vertex(x, yTop, uTop, vTop);
            vertex(x, yBot, uBot, vBot);
          }
          endShape();
        }
      pop();
    }
  }

  refreshText(){
    this.stripW = [];
    this.xCount = [];

    this.lineCount = keyArray.length;

    for(var m = 0; m < this.lineCount; m++){
      this.stripW[m] = pg[m].width * this.stripH/pg[m].height;
      this.xCount[m] = this.stripW[m]/this.xSpacer;
    }
  }

  refreshFont(){
    this.stripH = pg[0].height;
    this.stripW = [];
    this.xCount = [];

    for(var m = 0; m < this.lineCount; m++){
      this.stripW[m] = pg[m].width * this.stripH/pg[m].height;
      this.xCount[m] = this.stripW[m]/this.xSpacer;
    }
  }
}


/// heightRatio/pg.width = stripH/pg.height;