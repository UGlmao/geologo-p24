class Iron{
	constructor(x,y,r)
	{
	var options ={
		restitution:0.8,
		friction:3,
		density:30
	}
		this.x=50;
		this.y=50;
		this.r = 75;
		this.body=Bodies.circle(this.x, this.y, this.r,options)
		World.add(world, this.body);

	}
	display()
	{
			var ironpos=this.body.position;		
			push()
			translate(ironpos.x, ironpos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("black");
			ellipse(0,0,75,75);
			pop()
	}

}