'use strict';

var CarLot = (function(carlot) {
    var cars = [];

    carlot.loadInventory = function(callback) {
        console.log("loadInventory is running");

        var testCars = [
            {
              "make": "Mini Cooper",
              "model": "Hardtop",
              "year": "2006",
              "price": "$13,999",
              "description": "This car is fully-loaded and in perfect condition."
            },
            {
              "make": "Jeep",
              "model": "Wrangler",
              "year": "2013",
              "price": "$17,999",
              "description": "This car only has 5,000 miles on it!  Like new!."
            }
        ];

        callback(testCars);

        // var xhr = new XMLHttpRequest();

        // xhr.addEventListener('load', function() {
        //     cars = JSON.parse(this.responseText).cars;

        //     callback(cars);
        // });
        
        // xhr.open('GET', 'data/inventory.json');
        // xhr.send();

    };

    carlot.getInventory = function() {
        console.log("cars from getInventory", cars);
        return cars;
    };

    return carlot;


})(CarLot || {});

console.log("CarLot", CarLot);

