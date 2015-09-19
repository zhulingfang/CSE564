// This function should be called at the end of the function that
// calculates the cube size. it should be given a side length and 
// a maximum side length. 
	function drawSquarePyramid(sideLength, maxSideLength){
    // if the side length is greater than the max side length, 
	// use the max side length instead...
    if (sideLength > maxSideLength) 
		sideLength = maxSideLength

	var c2 = document.getElementById('c').getContext('2d');

	// convert the side length to a scaler between 0 and 100.
	var pixelScaler = sideLength/maxSideLength*95+5;

	// Clear contents of canvas before drawing
	c2.clearRect(0, 0, 400, 400);
	
	//draw the lines in the front
	c2.beginPath();
	c2.moveTo(2.2*pixelScaler, 0);
	c2.lineTo(0, 3.2*pixelScaler);
	c2.lineTo(2.4*pixelScaler, 4*pixelScaler);
	c2.lineTo(2.2*pixelScaler, 0);
	
	c2.moveTo(2.2*pixelScaler, 0);
	c2.lineTo(4.92*pixelScaler, 2.8*pixelScaler);
	c2.lineTo(2.4*pixelScaler, 4*pixelScaler);
	c2.lineTo(2.2*pixelScaler, 0);
	c2.closePath();
	c2.stroke();
    
	//draw dotted lines in the back	
	c2.setLineDash([5]);
	c2.moveTo(0, 3.2*pixelScaler);
	c2.lineTo(2.45*pixelScaler, 2.2*pixelScaler);
	c2.lineTo(2.2*pixelScaler, 0);
	c2.moveTo(2.45*pixelScaler, 2.2*pixelScaler);
	c2.lineTo(4.92*pixelScaler, 2.8*pixelScaler);	
	c2.stroke();
                                                          	                                                                
}
