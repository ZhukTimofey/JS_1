'use strict'
function convertFloor(x) {
    if (x>12 ||(x<12 && x>= 0)) {
        return x++;
    } else if (x==12) {
        return 14
    } else if (x < 0) {
        return x;
    }
}
console.log(convertFloor(12))

console.log(convertFloor(-1))

console.log(convertFloor(13))

console.log(convertFloor(2))