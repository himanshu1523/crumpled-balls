class Paper{
constructor(x,y,r){
    this.x=x;
    this.y=y;
    this.radius=r;
    
    var option={
    isStatic:true,
    'resitution':0.3,
    'friction':0,
    'density':1.2                 
    }

    this.body=Bodies.circle(x,y,radius,option);
   
    World.add(world,this.body);

}
display(){
    push()
    ellipseMode(RADIUS);
    translate(this.body.position.x,this.body.position.y);
    rotate(this.body.angle);
    fill("grey");
    ellipse(0,0,this.radius,this.radius);
    pop()
    }
}