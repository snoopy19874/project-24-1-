class Trash{
    constructor(x,y){
        var options = {
            isStatic: true 
        }
        this.x = x
        this.y = y
      this.width = 200
      this.height = 30
        this.bottomBody = Bodies.rectangle(this.x,this.y,this.width,this.height,options)
        this.leftBody = Bodies.rectangle(1085,565,30,200,options)
        this.rightBody = Bodies.rectangle(1300,565,30,200,options)
        
        
        World.add(world,this.bottomBody);
        World.add(world,this.leftBody);
        World.add(world,this.rightBody);
    }

    display(){
        var pos = this.bottomBody.position
        var leftPos = this.leftBody.position
        var rightPos = this.rightBody.position
        push();
        translate(pos.x,pos.y);
        rectMode(CENTER);
        strokeWeight(4);
        fill("red");
        rect(0,0,this.width,this.height)
        pop();
        push();
        translate(leftPos.x,leftPos.y);
        rectMode(CENTER);
        strokeWeight(4);
        fill("red");
        rect(0,0,30,200)
        pop();
        push();
        translate(rightPos.x,rightPos.y);
        rectMode(CENTER);
        strokeWeight(4);
        fill("red");
        rect(0,0,30,200)
        pop();
    }
    
}