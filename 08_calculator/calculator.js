const add = function(leftOp, rightOp) {
	return leftOp + rightOp;
};

const subtract = function(leftOp, rightOp) {
    return leftOp - rightOp;	
};

const sum = function(array) {
    return array.length > 0 ? array.reduce((prevSum, currVal) => prevSum + currVal) : 0;
};

const multiply = function(array) {
    return array.length > 0 ? array.reduce((prevSum, currVal) => prevSum * currVal) : 0;
};

const power = function(base, exponent) {
	return Math.pow(base, exponent);
};

const factorial = function(num) {
    let fact = 1;
    for (let i = num; i > 0; i--) {
        fact *= i;
    }
    return fact;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
