
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
	var pixelScaler = sideLength/maxSideLength*95 + 5;

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

function convertToMeters(val, currentUnit) {
	if (currentUnit == 'cm')
		return val*0.01;
	if (currentUnit == 'meter')
		return val;
	if (currentUnit == 'inch')
		return val*0.0254;
	if (currentUnit == 'yards')
		return val*0.9144
}

function validateInput(maxInput) {
	var x = $('#search').val();   
	if (isNaN(x) || x==null || x.length==0) {
		alert("Input must be a number");
		return false;
	}
	if ($("input[type=radio]:checked").length == 0) {
		alert("Please select a unit of measurement");
		return false;
	}
	var unit = $("input[type='radio'][name='unit']:checked").val();
	if (x<=0 || convertToMeters(x, unit) > maxInput) {
		alert("Input must be between 0 and " + maxInput + " meters (" + maxInput*1.09361 + " yards)");
		return false;
	}
	return true
}


function calculate() {
	var maxInput = 10; // meters
	var maxSideLength = maxInput/12; 
	if (!validateInput(maxInput))
		return false;

	var unit = $("input[type='radio'][name='unit']:checked").val();
	var input = $('#search').val();
	
	var sideLength = input/12;
	var volume = sideLength*sideLength*sideLength;

	drawCube(convertToMeters(sideLength, unit), maxSideLength);
	$('#results').empty();
	$('#results').append('<p>Side length = ' + sideLength + '</p>');
	$('#results').append('<p>Max volume = ' + volume + '</p>');
}



















