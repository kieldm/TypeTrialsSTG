class Ribbon {
  constructor(){
    this.res = 30;
    this.stages = 4;
    this.sets = 3;
    this.fullRes = this.res * this.stages * this.sets;

    this.radius = 200;
    this.stripH = 250;
    this.ang = PI/this.res;

    this.sec = PI * this.radius/this.res;

    this.stretch = this.sec * this.res;
    this.xSpace = this.stretch/this.res;

    this.heightRatio = pgA.width * this.stripH/pgA.height;

    this.speed = 0.125;
  }

  run(){
    this.update();
    this.display();
  }

  update(){

  }

  display(){
    push();
      rotateX(-PI/4);
      rotateY(-PI/4);

      translate(-this.stretch/2, -(this.radius * 4) * this.sets/2);

      noStroke();

      var culmDist = 0;
      for(var t = 0; t < 2; t++){
        if(t == 0){
          texture(pgA);
        } else {
          texture(pgB);
        }
        push();
          var start = frameCount * this.speed;
          var creepUp = map(start, 0, this.res*2, 0, -this.radius * 2);
          translate(0, creepUp);

          beginShape(TRIANGLE_STRIP);
          for(var m = start; m <= start + this.fullRes; m++){
            var loopM = m%(this.res * this.stages);

            var x, y;
            var zTop = -this.stripH/2;
            var zBot = this.stripH/2;
            
            if(loopM < this.res){
              x = loopM * this.xSpace;
              y = 0 + t;

              culmDist += this.xSpace;
            } else if(loopM < this.res * 2){
              var thisM = loopM - this.res;
    
              x = this.stretch + cos(thisM * this.ang - PI/2) * (this.radius - t);
              y = this.radius + sin(thisM * this.ang - PI/2) * (this.radius - t);

              culmDist += this.sec;
            } else if(loopM < this.res * 3){
              var thisM = loopM - this.res * 2;
    
              x = this.stretch - thisM * this.xSpace;
              y = this.radius * 2 - t;

              culmDist += this.xSpace;
            } else if(loopM <= this.res * 4){
              var thisM = loopM - this.res * 3;
    
              x = cos(thisM * -this.ang - PI/2) * (this.radius + t);
              y = this.radius * 3 + sin(thisM * -this.ang - PI/2) * (this.radius + t);
            
              culmDist += this.sec;
            }
            y += floor(m/(this.stages * this.res)) * this.radius * 4;

            var thisSpot = culmDist%this.heightRatio;
            var u = map(thisSpot, 0, this.heightRatio, 0, 1);

            vertex(x, y, zTop, u, 0);
            vertex(x, y, zBot, u, 1);

            if(thisSpot > this.heightRatio - this.sec){
              vertex(x, y, zTop, 0, 0);
              vertex(x, y, zBot, 0, 1);
            }
          }
          endShape();
        pop();      }    
    pop();
  }

  refresh(){
    this.heightRatio = pgA.width * this.stripH/pgA.height;
  }
}