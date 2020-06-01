"use strict"

function Product(name, price){
    this.name = name;
    this.price = price;
    }

Product.prototype.make25PercentDiscount = function(){
    this.price = this.price - this.price * 0.25;
}

let pop = new Product("Sol", 100);
alert(pop.price);
pop.make25PercentDiscount();
alert(pop.price);