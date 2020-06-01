"use strict"


class Product {
    constructor(name, price){
        this.name = name;
        this.price = price;
    }

    make25PercentDiscount(){
        this.price = this.price - this.price * 0.25;
    }
}


let pop = new Product("Sol", 100);
alert(pop.price);
pop.make25PercentDiscount();
alert(pop.price);