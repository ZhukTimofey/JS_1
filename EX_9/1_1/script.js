'use strict'
function PrintMessage(n) {
    let timerId = setInterval(() => alert('tick'), n);
    
}
PrintMessage(2000);