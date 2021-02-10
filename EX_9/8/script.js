'use strict'
let k;
function number(x) {
    let deg;
    for(let i =1;;++i) {
        if (x/(10**i)>=1){

        } else {
            deg = i-1;
            break
        }
    }
    let summ=0;
    let n = x;
    for (let i=deg;i>=0;i--){       
        if(n>=10) {
            
            summ+=Math.trunc(n/10**i)
        n=n-(Math.trunc(n/10**i)*10**i)
        
        } else {
            summ+=n;
            
        }
        console.log(summ)
    }
    
    if(summ>10){
        console.log('==============')
        number (summ)
        console.log(k)
        
    } else {
        console.log(summ)
        k=summ
        return k;
    }
    return k
    }
    
console.log(number(555))