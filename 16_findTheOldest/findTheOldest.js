const findTheOldest = function(arr) {
    arr = arr.sort((a, b) => {
        if (typeof(a.yearOfDeath) === "undefined"){
            const d = new Date();
            a.yearOfDeath = d.getFullYear();
        }
        if (typeof(b.yearOfDeath) === "undefined"){
            const d = new Date();
            b.yearOfDeath = d.getFullYear();
        }
        aYears = a.yearOfDeath - a.yearOfBirth;
        bYears = b.yearOfDeath - b.yearOfBirth;
        return bYears - aYears
    });
    return arr[0];
};

// Do not edit below this line
module.exports = findTheOldest;
