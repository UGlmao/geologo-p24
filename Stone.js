class Stone{
	constructor(x,y,r)
	{
	var options ={
		restitution:0.8,
		friction:0.9,
		density:12
	}
		this.x=100;
		this.y=100;
		this.r = 60;
		this.body=Bodies.circle(this.x, this.y, this.r,options)
		World.add(world, this.body);

	}
	display()
	{
			var stonepos=this.body.position;		
			push()
			translate(stonepos.x, stonepos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("grey");
			ellipse(0,0,60,60);
			pop()
	}

}