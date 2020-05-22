"use strict";

const products = [
    {
    id: 3,
    price: 200,
    },
    {
    id: 4,
    price: 900,
    },
    {
    id: 1,
    price: 1000,
    },
];


function creatingADiscountedPrice(percent){
    products.forEach(function(product){
        product["price"] = product["price"] - (product["price"] / 100 * percent)
    });
}

function priceOutput(prices, percent){
    for (let i in prices){
        console.log(`На товар ${prices[i]['id']} скидка ${percent} %\n Итоговая цена - ${prices[i]['price']} рублей`)
    }
}


let percent = 15;
creatingADiscountedPrice(percent);
priceOutput(products, percent)