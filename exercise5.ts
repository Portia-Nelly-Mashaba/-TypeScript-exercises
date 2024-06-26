class Calculator {
    // Method to validate if the inputs are numbers
    private validateNumbers(...numbers: number[]): void {
        for (let num of numbers) {
            if (typeof num !== 'number' || isNaN(num)) {
                throw new Error("Invalid input: all inputs must be valid numbers");
            }
        }
    }

    // Method to add two numbers
    add(a: number, b: number): number {
        this.validateNumbers(a, b);
        return a + b;
    }

    // Method to subtract two numbers
    subtract(a: number, b: number): number {
        this.validateNumbers(a, b);
        return a - b;
    }

    // Method to multiply two numbers
    multiply(a: number, b: number): number {
        this.validateNumbers(a, b);
        return a * b;
    }

    // Method to divide two numbers
    divide(a: number, b: number): number {
        this.validateNumbers(a, b);
        if (b === 0) {
            throw new Error("Division by zero error");
        }
        return a / b;
    }
}

// usage:
const calculator = new Calculator();
console.log(calculator.add(5, 3));       // Outputs: 8
console.log(calculator.subtract(5, 3));  // Outputs: 2
console.log(calculator.multiply(5, 3));  // Outputs: 15
console.log(calculator.divide(6, 3));    // Outputs: 2
