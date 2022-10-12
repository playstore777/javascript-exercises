const removeFromArray = function(array, ...myargs) {
    for (let iteration = 0; iteration < myargs.length; iteration++) {
        if (array.includes(myargs[iteration])) {
            let index = array.indexOf(myargs[iteration]);
            let removeOnlyOne = 1;
            if (index >= 0) {
                array.splice(index, removeOnlyOne);
            }
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
