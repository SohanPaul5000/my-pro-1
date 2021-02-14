class Box{
  constructor(x, y, width, height, angle) {
      var options = {
          'restitution':0.8,
          'friction':3.0,
          'density':30
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      //console.log(this.body.speed);
      if(this.body.speed>20){
        World.remove(world,this.body)
      }
      else{

      
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
     rectMode(CENTER);
     fill("white");
     stroke("black");
     strokeWeight(3);
     rect(0,0,this.width,this.height);
      pop();
    }
    }
}