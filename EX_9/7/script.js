'use strict'
let firstArr = [
    'afeaef',
    'afea',
    'rjytuj',
    'fgxx',
]
function transformArray(arr,index1,index2,adding) {
    for (let i = 0; i<arr.length;++i) {
        arr[i]=arr[i]+adding;
    }
    let swap =arr[index1];
        arr[index1]= arr[index2];
        arr[index2]=swap;
    return arr;
}
console.log(transformArray(firstArr,2,3,'Pepe'))