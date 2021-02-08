'use strict';
let arr = [];

for (let i=0;;i++) {
    let numberStr = prompt();
    let number=Number(numberStr);
    if (number>15 || number<15) {
        arr[i]=number;        
    } else if (number ==15) {
        break;
    } else {
        alert("incorect value")
    }
}
let result = arr.reduce ((sum,item) => {
    return sum+item;
})
alert(result)
