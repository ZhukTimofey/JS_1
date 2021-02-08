'use strict';
let arr = [1, 4, 2, 67, 34, 2, 50, 23, 11, 10, 5, 4, 9, 21];
let result = arr.filter(item => {
    return item>10;
})
console.log(result);