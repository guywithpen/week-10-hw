var bubbles = [];

function setup() {
	createCanvas(800,800);
	for(var i=0; i<10; i++) {
		bubbles.push(new Bubble(random(width),random(height),
			random(255), random(255), random(255)));
	}
}

function draw() {
	background('green');
	for(var i = 0; i<10; i++) {
		bubbles[i].move();
		bubbles[i].show();
	}
}


function Bubble(x, y, red, green, blue) {
	this.x = x;
	this.y = y;
	this.red = red;
	this.green = green;
	this.blue = blue;

	this.show = function() {
		fill(this.red,this.green,this.blue);
		line(this.x, this.y, 200, 100);
        stroke(10);
        
        
       
	};

	this.move = function() {
		this.x += random(-10,10);
		this.y += random(-10,10);
	}
    
    
}