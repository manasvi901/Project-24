class Paper{
    constructor(x,y){
	var b1, b2, b3;
    b1 = createSprite(400,600,200,20);
	b1.shapeColor=color("red");
	b2 = createSprite(300,560,20,100);
	b2.shapeColor=color("red");
	b3 = createSprite(500,560,20,100);
	b3.shapeColor=color("red")
	World.add(world,this.body)
}	
}