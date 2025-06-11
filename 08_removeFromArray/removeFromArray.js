const removeFromArray = function(array, ...theArgs) {
    for (let i = 0; i < theArgs.length; ++i) {
        while (array.includes(theArgs[i])){
            index = array.indexOf(theArgs[i]);
            array.splice(index, 1);
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
