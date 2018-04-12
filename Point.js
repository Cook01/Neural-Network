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
        if(this.y < f(this.x)){
            this.label = 1;
        } else {
            this.label = -1;
        }
    }

    //Force the X and Y values of the Point
    setPoint(x, y){
        this.x = x;
        this.y = y;

        //Calculate the pixel coordonate on screen (for drawing)
        this.pX = map(this.x, -10, 10, width, 0);
        this.pY = map(this.y, -10, 10, 0, height);

        //Calculate the label (in order to train the Neural Network)
        if(this.y < f(this.x)){
            this.label = 1;
        } else {
            this.label = -1;
        }
    }

    //Draw the point
    draw(){
        stroke(0);

        //Visualization of the correct answer
        if(this.label == -1){
            strokeWeight(4);
        } else {
            strokeWeight(2);
        }

        //Draw the point
        ellipse(this.pX, this.pY, 8);
    }

    //Convert the coordonate to an Array[2] usable by the Perceptron
    asInputs(){
        var output = new Array(2);

        output[0] = this.x;
        output[1] = this.y;

        return output;
    }
}