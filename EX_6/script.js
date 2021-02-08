'use strict';
let arr = ['Anna', 12, 'Sam', 9,  'Kate', 10, 'Ron', 9]
arr.forEach(item=> {
    if (typeof item === 'string') {
        console.log(item);
    }
})
arr.forEach(item=> {
    if (typeof item === 'number') {
        console.log(item);
    }
})