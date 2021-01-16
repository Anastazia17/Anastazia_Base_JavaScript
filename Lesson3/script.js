/* ______________________Task 1______________________ */

console.log();
let num = 0;
while (num <= 100) {
    let check = true;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            check = false;
            break;
        }
    }
    if (check) console.log(num);
    num++;
}


/* ______________________Task 2______________________ */

function getNumber(min, max) {
    let number = parseInt(Math.random() * (max - min) + min);
    if (number === -0) number = 0;
    return number;
}

console.log;
const basket = [
    {
        product: 'молоко',
        price: getNumber(50, 100)
    },
    {
        product: 'творог',
        price: getNumber(50, 100)
    },
    {
        product: 'cыр',
        price: getNumber(50, 100)
    },
    {
        product: 'сметана',
        price: getNumber(50, 100)
    }
];

let basketCost = 0;
for (let prod of basket) {
    basketCost += prod.price;
    console.log('Товар ' + '"' + prod.product + '"' + ' стоит: ' + prod.price + ' руб.');
}

console.log('Стоимость корзины: ' + basketCost + ' руб.');


/* ______________________Task 3______________________ */

console.log;
function countBasketPrice(basket) {
    let basketPrice = 0;
    for (let prod of basket) {
        basketPrice += prod.price;
    }
    return basketPrice;
}

console.log('Стоимость корзины: ' + countBasketPrice(basket) + ' руб.');


/* ______________________Task 4______________________ */

console.log;
for (let i = 0; i < 10; console.log(i++)) { }


/* ______________________Task 5______________________ */

console.log;
let range = 'x';
for (let i = 0; i < 20; i++) {
    console.log(range);
    range += 'x';
}