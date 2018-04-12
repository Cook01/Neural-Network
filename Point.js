function f(x){
    return 3*x + 1;
}

class Point{
    /*constructor(x, y){
        this.x = x;
        this.y = y;

        this.pX = map(-10, 10, 0, width);
        this.pY = map(-10, 10, height, 0);

        if(this.y < f(this.x)){
            this.label = 1;
        } else {
            this.label = -1;
        }
    }*/

    constructor(){
        this.x = random(0, 400);
        this.y = random(0, 400);

        //this.pX = map(-10, 10, 0, 400);
        //this.pY = map(-10, 10, 400, 0);

        this.pX = this.x;
        this.pY = this.y;

        if(this.y < f(this.x)){
            this.label = 1;
        } else {
            this.label = -1;
        }
    }

    draw(){
        stroke(0);

        if(this.label == -1){
            strokeWeight(4);
        } else {
            strokeWeight(2);
        }

        
        ellipse(this.pX, this.pY, 8);
    }

    asInputs(){
        output = new Array(2);

        output[0] = x;
        output[1] = y;

        return output;
    }

    fy(){
        return f(this.x);
    }
}