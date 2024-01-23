class Calculator {
    constructor() {
        this.result = 0;
    }

    add(num) {
        this.result += num;
    }

    subtract(num) {
        this.result -= num;
    }

    multiply(num) {
        this.result *= num;
    }

    divide(num) {
        if (num === 0) {
            throw new Error("Cannot divide by zero");
        }
        this.result /= num;
    }

    clear() {
        this.result = 0;
    }
}