class Perceptron{

    //Constructor
    constructor(nbInput){
        //Init Weights at random (between -1 and 1)
        this.weights = new Array(nbInput);
        for (let i = 0; i < this.weights.length; i++) {
            this.weights[i] = random(-1, 1);
        }

        //Init Bias Weight at random (between -1 and 1)
        this.bias = random(-1, 1);

        //Init Learning Rate
        this.learningRate = 0.0001;
    }

    //Activation Methode
    activation(sum){
        
        if(sum > 0){    //Positive sum => Outpout = 1
            return 1;
        } else {        //Negative sum => Outpout = -1
            return -1;
        }
    }

    //Guess the Output from the Inputs (inputs.lenght == weight.length !!!)
    guess(inputs){
        var sum = 0;
        
        // ∑(Wi*Xi)+Wb
        for (let i = 0; i < inputs.length; i++) {
            sum += inputs[i]*this.weights[i];
        }
        sum += this.bias;

        // Test the activation method and return the guessed output
        return this.activation(sum);
    }

    //Train the Perceptron from the Inputs (inputs.lenght == weight.length !!!)
    train(inputs, target){
        //Try to guess the Output from the Inputs
        var answer = this.guess(inputs);

        //Calculate the error
        var error = target - answer;

        //Tweak the Weights
        for (let i = 0; i < this.weights.length; i++) {
            this.weights[i] += error * inputs[i] * this.learningRate;
        }
        //Tweak the Bias's Weight
        this.bias += error * this.learningRate;

        //Return the guessed output
        return answer;
    }

    //Draw Perceptron's guessed line
    drawGuessLine(){

        var w1 = this.weights[0];
        var w2 = this.weights[1];

        var p1 = new Point();
        var p2 = new Point();

        var x1 = -10;
        var x2 = 10;

        // Perceptron's guessed line : ∑(Wi*Xi)+Wb = 0
        var y1 = -(w1/w2)*x1-(this.bias/w2);
        var y2 = -(w1/w2)*x2-(this.bias/w2);

        p1.setPoint(x1, y1);
        p2.setPoint(x2, y2);

        //Draw the line
        stroke(150, 0, 255);
        strokeWeight(2);

        line(p1.pX, p1.pY, p2.pX, p2.pY);
    }
}