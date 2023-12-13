//This is our main javascript file constituting our p5.js sketch.
//It must be loaded from index.html
//It assumes that the file "myPalettes.js" has also been loaded

let x, y;
let h, w;

//This "setup" function is called once, at start
function setup() {
	createCanvas(windowWidth/2, windowHeight/2); // width and height, in pixels
	background('gray');
}



// We put our drawing commands in this "draw" function.
// It will be called automatically, up to 60 times per second!
function draw() {
	x = random(windowWidth)
	y = random(windowHeight)
	h = random(100)
	w = random(100)
	
if(y < 300)
		fill("orange")
	
if(y > 300)
	fill("skyblue")
	

	noStroke() // Colour-in the next shapes, this colour, please!
	// noStroke();  // Don't outline the next shapes, please.
	
	//Draw a rectangle positioned at x: 200, y: 100,
	//and with a width of 300 and height of 150
	rect(x, y, w, h, 20, 20);
	
	//draw another rectangle elsewhere
	rect(x, y, w, h, 20, 20);
	
	if (frameCount > 300) 
	noLoop();
	
	
}
