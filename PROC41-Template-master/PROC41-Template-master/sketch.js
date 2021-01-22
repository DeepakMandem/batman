    var child;
    var maxDrops=100;
    var thunder;
    var thunderImage;
    

    function preload(){
    thunderImage = loadImage("4.png"); 
    
    }

    function setup(){
    createCanvas(1000, 600); 
    thunder = createSprite(400,200,50,50);
    thunder.addImage("thunder",thunderImage);
    child = new Umbrella(500,400,10,10);
    
    }

    function draw(){
        for(var i=0; i<maxDrops; i++){
            drops.push(new createDrop(random(0,400), random(0,400)));
        }


    
    }   

