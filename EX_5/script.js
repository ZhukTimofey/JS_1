'use strict';
let arr = [
    'aa',
    'aawfaewafeagfw',
    'aawfaewafeaefa',
    'aawfaewafefeaws',
    'aawfaewafeafwdfa',
] ;
let result = arr.map(item=> {
    return item.length;
})
console.log(result);