'use strict';

var CarLot = (function(carlot) {
    var cars = [];

    carlot.loadInventory = function(callback) {
        console.log("loadInventory is running");

        var xhr = new XMLHttpRequest();

        xhr.addEventListener('load', function() {
            cars = JSON.parse(this.responseText).cars;

            callback(cars);
        });
        
        xhr.open('GET', 'data/inventory.json');
        xhr.send();

    };

    carlot.getInventory = function() {
        console.log('getInventory is running');
        console.log('cars', cars);
        return cars;
    };

    return carlot;


})(CarLot || {});

console.log("CarLot", CarLot);

