class Point{

    //Constructor
    constructor(){
        //Init a random point between (-10;-10) and (10;10)
        this.x = random(-10, 10);
        this.y = random(-10, 10);

        //Calculate the pixel coordonate on screen (for drawing)
        this.pX = map(this.x, -10, 10, width, 0);
        this.pY = map(this.y, -10, 10, 0, height);

        //Calculate the label (in order to train the Neural Network)
        this.label = (this.y < f(this.x));
    }

    //Force the X and Y values of the Point
    setPoint(x, y){
        this.x = x;
        this.y = y;

        //Calculate the pixel coordonate on screen (for drawing)
        this.pX = map(this.x, -10, 10, width, 0);
        this.pY = map(this.y, -10, 10, 0, height);

        //Calculate the label (in order to train the Neural Network)
        this.label = (this.y < f(this.x));
    }

    //Draw the point
    draw(){
        stroke(0);
        strokeWeight(2);
        var size = 8;

        //Visualization of the correct answer
        if(this.label){
            //Draw the point as circle
            ellipse(this.pX, this.pY, size);
        } else {
            rect(this.pX-(size/2), this.pY-(size/2), size, size);
        }
    }

    //Convert the coordonate to an Array[2] usable by the Perceptron
    asInputs(){
        var output = new Array(2);

        output[0] = this.x;
        output[1] = this.y;

        return output;
    }
}