const palindromes = function (string) {
    let punctuationMarks = ["!", ".", "?",];
    if (punctuationMarks.includes(string.at(-1))){
        string = string.slice(0,-1);
    }
    string = string.toLowerCase();
    let arr = string.split("");
    arr = arr.filter(item => !(item === "," || item === " "));
    string = arr.join("");
    let arrReversed = arr.reverse();
    let stringReversed = arrReversed.join("");
    return string === stringReversed
};

// Do not edit below this line
module.exports = palindromes;
