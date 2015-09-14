
// This function should be called at the end of the function that
// calculates the cube size. it should be given a side length and 
// a maximum side length. 
function drawCube(sideLength, maxSideLength){
	// if the side length is greater than the max side length, 
	// use the max side length instead...
	if (sideLength > maxSideLength) 
		sideLength = maxSideLength;

	var c2 = document.getElementById('c').getContext('2d');

	// convert the side length to a scaler between 0 and 100.
	var pixelScaler = sideLength/maxSideLength*100;

	// Clear contents of canvas before drawing
	c2.clearRect(0, 0, 400, 400);

	// draw the front
	c2.fillStyle = '#cc0000';
	c2.beginPath();
	c2.moveTo(0, 4*pixelScaler);
	c2.lineTo(0, 1*pixelScaler);
	c2.lineTo(3*pixelScaler, 1*pixelScaler);
	c2.lineTo(3*pixelScaler, 4*pixelScaler);
	c2.lineTo(0, 4*pixelScaler);
	c2.closePath();
	c2.fill();

	// draw the top
	c2.fillStyle = '#e50000';
	c2.beginPath();
	c2.moveTo(0, 1*pixelScaler);
	c2.lineTo(1*pixelScaler, 0);
	c2.lineTo(4*pixelScaler, 0);
	c2.lineTo(3*pixelScaler, 1*pixelScaler);
	c2.lineTo(0, 1*pixelScaler);
	c2.closePath();
	c2.fill();

	// draw the side
	c2.fillStyle = '#7f0000';
	c2.beginPath();
	c2.moveTo(4*pixelScaler, 0);
	c2.lineTo(3*pixelScaler, 1*pixelScaler);
	c2.lineTo(3*pixelScaler, 4*pixelScaler);
	c2.lineTo(4*pixelScaler, 3*pixelScaler);
	c2.lineTo(4*pixelScaler, 0);
	c2.closePath();
	c2.fill();
}

function validateInput() {
    		var x = document.getElementById("search").value;      
    		if (isNaN(x)) 
			alert("Input must be a number");
    		else if (x<=0 || x==null) 
			alert("Input must be greater than zero or not null");
	}
