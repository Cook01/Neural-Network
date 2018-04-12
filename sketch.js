let neuralNetwork;
let datas;

function setup() {
	neuralNetwork = new Perceptron(2);
	datas = new Array(100);

	createCanvas(400, 400);

	for (let i = 0; i < datas.length; i++) {
		datas[i] = new Point();
		
	}
}

function draw() {
	background(255);

	point1 = new Point();
	point2 = new Point();

	stroke(0);
	strokeWeight(1);

	line(point1.px, point1.fy(), point2.x, point2.fy());

	for (let i = 0; i < datas.length; i++) {
		datas[i].draw();
	}
}