// es6 default import syntax
import shape from './shape';

 // class SubclassName exterds SuperClassName
 export default class circle extends shape{
    constructor(){
        // first line of subclass constructor should call superclass constructor with appropriate parameters
        super();
    }
    calculateArea(){
        console.log("Area of a circle " + this.color);
        return 3.14*5*5;
    }
}