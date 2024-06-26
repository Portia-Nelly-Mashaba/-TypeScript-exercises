var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    // Method to validate if the inputs are numbers
    Calculator.prototype.validateNumbers = function () {
        var numbers = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            numbers[_i] = arguments[_i];
        }
        for (var _a = 0, numbers_1 = numbers; _a < numbers_1.length; _a++) {
            var num = numbers_1[_a];
            if (typeof num !== 'number' || isNaN(num)) {
                throw new Error("Invalid input: all inputs must be valid numbers");
            }
        }
    };
    // Method to add two numbers
    Calculator.prototype.add = function (a, b) {
        this.validateNumbers(a, b);
        return a + b;
    };
    // Method to subtract two numbers
    Calculator.prototype.subtract = function (a, b) {
        this.validateNumbers(a, b);
        return a - b;
    };
    // Method to multiply two numbers
    Calculator.prototype.multiply = function (a, b) {
        this.validateNumbers(a, b);
        return a * b;
    };
    // Method to divide two numbers
    Calculator.prototype.divide = function (a, b) {
        this.validateNumbers(a, b);
        if (b === 0) {
            throw new Error("Division by zero error");
        }
        return a / b;
    };
    return Calculator;
}());
// usage:
var calculator = new Calculator();
console.log(calculator.add(5, 3)); // Outputs: 8
console.log(calculator.subtract(5, 3)); // Outputs: 2
console.log(calculator.multiply(5, 3)); // Outputs: 15
console.log(calculator.divide(6, 3)); // Outputs: 2
