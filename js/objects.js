class Objects
{
    constructor(x,y) {
        this.x = x;
        this.y = y;
        this.body = Bodies.rectangle(this.x,this.y,100,100);
        this.image = loadImage("assets/gift.png");
        //this.scale = 0.2;
        World.add(world,this.body);
    }
    display() {
        push()
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,100,100);
        pop()
    }
}