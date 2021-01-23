'use strict'
const currentPassword='qwerty'
const password = prompt('Enter password','password')
if (currentPassword==password) {
alert('Пароль верный')
}
else if(password==null || password==''){
    alert('Отмена')
}
else {
    alert('Пароль неверный')
}