const repeatString = function(string, repeatCount) {
    if (repeatCount < 0) {
        return "ERROR";
    }
    let repeatedString = "";
    for (let iteration = 0; iteration < repeatCount; iteration++) {
        repeatedString += string;
    }
    return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
