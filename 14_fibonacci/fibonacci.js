const fibonacci = function(num) {
    num = +num
    if (num === 0){
        return 0
    }
    else if (num < 0) {
        return "OOPS"
    } else {
        let fibonacci = [0, 1]
        for (let i = 1; i < num ; ++i) {
            let f1 = fibonacci[i];
            let f2 = fibonacci[i-1];
            let newfn = f1 + f2;
            fibonacci.push(newfn);
        }
        return fibonacci.at(-1)
    }

};

// Do not edit below this line
module.exports = fibonacci;
