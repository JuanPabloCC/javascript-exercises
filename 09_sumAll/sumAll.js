const sumAll = function(a, b) {
    if (Number.isInteger(a) && Number.isInteger(b)) {
        if (a > 0 && b > 0) {
            if (a < b) {
                let sum = 0;
                for (let i = a; i <= b; ++i) {
                    sum += i;
                }
                return sum;
            } else {
                let sum = 0;
                for (let i = b; i <= a; ++i) {
                    sum += i;
                }
                return sum;
            }     
        } else {
            return "ERROR";
        }
    } else {
        return "ERROR";
    }
};

// Do not edit below this line
module.exports = sumAll;
