class Drops {
    constructor(x,y){
    var options = {
    friction:0.1
    }
    this.body = Bodies.circle(x,y,options)
  
  }
  
  display(){
    fill("blue")
  }
  update(){
    if(this.body.position.y > 600){
      Mater.Body.setPosition(this.body, {x:random(0,400),y:random(0,400)})
  
    }
  
  }
  
  }
      
  