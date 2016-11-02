'use strict';

var CarLot = (function(carlot) {
    var cars = [];

    carlot.loadInventory = function(callback) {
        console.log("loadInventory is running");

        var testCars = [
            {
                "make": "Chevrolet",
                "model": "Impala"
            },
            {
                "make": "Nissan",
                "model": "Sentra"
            },
            {
              "make": "Mini Cooper",
              "model": "Hardtop"  
            }
        ];

        callback(testCars);

        // var xhr = new XMLHttpRequest();
        // xhr.open('GET', 'data/inventory.json');

        // xhr.addEventListener('load', function() {
        //     cars = JSON.parse(this.responseText).cars;

        //     callback(cars);
        // });

        // xhr.send();

    };

    carlot.getInventory = function() {
        console.log("cars from getInventory", cars);
        return cars;
    };

    return carlot;


})(CarLot || {});

console.log("CarLot", CarLot);

