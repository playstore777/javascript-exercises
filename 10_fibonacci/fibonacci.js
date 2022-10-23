const fibonacci = function(index) {
    if (index < 0) return "OOPS";
    index = parseInt(index);
    let i = 1;
    let fib = 1;
    let buffer = fib;
    for (let _ = 2; _ < index; _++) {
        buffer = fib;
        fib += i;
        i = buffer;
    }
    return fib;
};

// Do not edit below this line
module.exports = fibonacci;
