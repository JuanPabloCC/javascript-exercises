const add = function(a, b) {
	return a + b
};

const subtract = function(a, b) {
	return a - b
};

const sum = function(arr) {
  return arr.reduce((sum, current) => sum + current, 0)
};

const multiply = function(arr) {
  return arr.reduce((mutiply, current) => mutiply * current)
};

const power = function(a, b) {
	return a ** b
};

const factorial = function(num) {
	if (num === 0){
    return 1
  }
  else {
    let array = Array.from({length: num}, (_, i) => i + 1);
    return array.reduce((mutiply, current) => mutiply * current)
  }
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
