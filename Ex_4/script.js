'use strict';
let login_bool=confirm('Хотите ли вы залогиниться?');
let first_login='abc';

function login(enter_login) {
    if(enter_login=='') {
        alert('Некоректный логин')
    } else if(enter_login==first_login) {
        alert('Добро пожаловать')
    } else  if (enter_login==null) {
        let cancel=confirm('Вы уверены что не хотите логиниться')
        if (!cancel) {
            let enter_login=prompt('Введите логин');
            login(enter_login);
        }
    } else {
        alert('Такого логина не существует, попробуйте ещё раз');
        let enter_login=prompt('Введите логин');
        login(enter_login);
    }
    
}

const reasons = [
    "Вы попали на этот сайт случайно",
    "У вас нету аккаунта на нашем сайте",
    "Вы не помните свой логин"
]
if (login_bool) {
    let enter_login=prompt('Введите логин');
    login(enter_login);
} else {
    let reason=prompt(`Выберете причину:\n1: ${reasons[0]}\n2: ${reasons[1]}\n3: ${reasons[2]}\n`)
    let numberOfreason=Number(reason);
    console.log(numberOfreason)
    if (numberOfreason=='') {
        alert='Вы ничего не ввели'
    } else if (numberOfreason==null){
        alert('Вы нажаали отмену')
    } else if(isNaN(numberOfreason)) {
        alert('Вы ввели некоректное значение')
    } else if (numberOfreason<=(reasons.length) && numberOfreason>=1 ) {
        numberOfreason=--numberOfreason
        alert(`Вы выбрали причину №${numberOfreason+1}: "${reasons[numberOfreason]}"`)
    } else {
        alert('Такой причины нету')
    }
}


