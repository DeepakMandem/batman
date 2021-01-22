class Umbrella {
    constructor(x,y){
    var options = {
    friction:0.1
    
    }
    this.body = Bodies.circle(x,y,options)
    this.image = loadImage("walking_4.png");
  
  }
  
  display(){
   
  }
}