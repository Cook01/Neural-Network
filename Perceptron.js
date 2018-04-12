class Perceptron{
    constructor(nbInput){
        this.weights = new Array(nbInput);

        this.weights.forEach(weight => {
            weight = random(-1, 1);
        });

        this.bias = random(-1, 1);
        this.learningRate = 0.01;
    }

    activation(sum){
        if(sum > 0){
            return 1;
        } else {
            return -1;
        }
    }

    guess(inputs){
        var sum = 0;

        for (let i = 0; i < inputs.length; i++) {
            sum += inputs[i];
        }

        sum += bias;

        return activation(sum);
    }

    train(inputs, target){
        answer = this.guess(inputs);

        error = target - answer;

        for (let i = 0; i < inputs.length; i++) {
            this.weights[i] += error * inputs[i] * this.learningRate;
        }

        bias += error * this.learningRate;        
    }
}