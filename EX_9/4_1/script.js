'use strict'
alert('Press button');

let timerId = setInterval(() => alert('loding'));
setTimeout(() => { clearInterval(timerId);}, 5000);
setTimeout(() => alert('Message'), 5000);