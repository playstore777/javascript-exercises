const sumAll = function (start, end) {
    let length = 0;

    if (start < 0 || end < 0 || !Number.isSafeInteger(start) || !Number.isSafeInteger(end)) {
        return "ERROR";
    }

    if (start > end) {
        length = start;
    } else {
        length = end;
    }

    return ((length * (length + 1)) / 2); // Gauss formula
};

// Do not edit below this line
module.exports = sumAll;
