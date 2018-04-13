//Neural Network (Perceptron)
let neuralNetwork;
//Data Set (Array of Points)
let datas;

//Line to guess : y = ax + b
let a;
let b;

//Line to guess
function f(x){
    return a*x + b;
}

function setup() {
	createCanvas(windowWidth, windowHeight);

	//Init line to guess
	a = random(-10, 10);
	b = random(-10, 10);

	function activation(input){
		return (input > 0);
	}

	//Init Perceptron (2 inputs : x and y)
	neuralNetwork = new Perceptron(2, activation);

	//Init Data Set
	nbData = floor(random((width*height)/500, (width*height)/250));
	datas = new Array(nbData);
	for (let i = 0; i < datas.length; i++) {
		datas[i] = new Point();
	}
}

function draw() {
	background(255);

	//Get 2 Point from the line to guess
	var point1 = new Point();
	point1.setPoint(-10, f(-10));
	var point2 = new Point();
	point2.setPoint(10, f(10));

	//Draw the line to guess
	stroke(0);
	strokeWeight(2);
	line(point1.pX, point1.pY, point2.pX, point2.pY);

	//Draw Perceptron's guessed line
	neuralNetwork.drawGuessLine();

	//For each Datas
	for (let i = 0; i < datas.length; i++) {

		//Guess (or train) the Data
		//var result = neuralNetwork.guess(datas[i].asInputs());
		var result = neuralNetwork.train(datas[i].asInputs(),datas[i].label);

		//Colorize the Data from the Neural Network's guess
		if(result == datas[i].label){
			//Green = success
			fill(0, 255, 0);
		} else {
			//Red = fail
			fill(255, 0, 0);
		}

		//Draw the Data
		datas[i].draw();
	}
}