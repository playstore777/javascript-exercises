const reverseString = function(string) {
    // string is converted to a list, using SPLIT() it takes each character in the string as one element of the list.
    // then after reversing we join it back as a string.
    return string.split('').reverse().join("");
};

// Do not edit below this line
module.exports = reverseString;
