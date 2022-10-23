const palindromes = function (str) {
    let regEx = /[^a-zA-Z]/g;
    str = str.replace(regEx, '');
    let reveresedString = reverseString(str);
    return str.toLowerCase() === reveresedString.toLowerCase();
};

const reverseString = (str) => {
    return str.split('').reverse().join('');
}

// Do not edit below this line
module.exports = palindromes;
