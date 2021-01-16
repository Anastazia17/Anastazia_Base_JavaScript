/* ______________________Task 1______________________ */

function numToObj(n) {
    if (n < 0 || n > 999) {
        console.log('Неверное число! Введите число от 0 до 999:');
    } else {
        let str = n.toString();
        let obj = {};
        let l = str.length;
        switch (l) {
            case 3:
                obj['Сотни'] = str[l - 3];
            case 2:
                obj['Десятки'] = str[l - 2];
            case 1:
                obj['Единицы'] = str[l - 1];
        }
        console.log('Число по разрядам:')
        return obj;
    }
}

let n = prompt('Введите число от 0 до 999:');
console.log(numToObj(n));


/* ______________________Task 2______________________ */

function getNumber(min, max) {
    let number = parseInt(Math.random() * (max - min) + min);
    if (number === -0) number = 0;
    return number;
}

function countBasketPrice(basket) {
    let basketPrice = 0;
    for (let prod of basket) {
        basketPrice += prod.price;
    }
    return basketPrice;
}

console.log();
const basket = [
    {
        id: 1,
        product: 'молоко',
        price: getNumber(50, 100)
    },
    {
        id: 2,
        product: 'творог',
        price: getNumber(50, 100)
    },
    {
        id: 3,
        product: 'cыр',
        price: getNumber(50, 100)
    },
    {
        id: 4,
        product: 'сметана',
        price: getNumber(50, 100)
    }
];

let basketCost = 0;
for (let prod of basket) {
    basketCost += prod.price;
    console.log('Товар ' + '"' + prod.product + '"' + ' стоит: ' + prod.price + ' руб.');
}

console.log('Стоимость корзины: ' + countBasketPrice(basket) + ' руб.');


/* ______________________Task 3______________________ */

let stock = [
    {
        id: 1,
        product: 'молоко',
        brand: 'Простоквашино',
        name: 'Ультрапастеризованное',
        fatPercentage: 1.5,
        weight: 950,
        price: 84,
        inStockPieces: 30
    },
    {
        id: 2,
        product: 'творог',
        brand: 'Простоквашино',
        name: 'Мягкий',
        fatPercentage: 5,
        weight: 130,
        price: 79,
        inStockPieces: 26
    },
    {
        id: 3,
        product: 'cыр',
        brand: 'Брест-Литовск',
        name: 'Классический',
        fatPercentage: 45,
        weight: 200,
        price: 220,
        inStockPieces: 18
    },
    {
        id: 4,
        product: 'сметана',
        brand: 'Простоквашино',
        name: 'Из топленых сливок',
        fatPercentage: 15,
        weight: 260,
        price: 150,
        inStockPieces: 32
    }
];

for (let prod of stock) {
    console.log('Товаров с ID ' + prod.id + ' с типом ' + '"' + prod.product + '"' + ' и названием ' + '"' + prod.name + '"'
        + ' бренда ' + '"' + prod.brand + '"' + ' c ' + prod.fatPercentage + ' % жирности' + ' и массой ' + prod.weight + ' г'
        + ' стоимостью ' + prod.price + ' руб.' + ' на складе ' + prod.inStockPieces + ' штук.');
}