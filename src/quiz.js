'use strict';

// var CarLot = (function(carlot){
    
    // carlot.
    // populatePage = 
    
    var carInventory = require('./CarLot');
    var eventHandlers = require('./dom');


    function populatePage(inventory){
        console.log('populatePage is running');
        console.log('inventory', inventory);
        var counter = 0;
        inventory.forEach(function(car) {
            var carHtml = `
            <h1>${car.year} ${car.make} ${car.model}</h1>
            <h3>${car.price}</h3>
            <h4 id="description--${counter}">${car.description}</h4>`;

            var carCard = document.createElement('div');
            carCard.innerHTML = carHtml;

            var cardId = document.createAttribute('id');
            cardId.value = `card--${counter}`;
            carCard.setAttribute('id', cardId.value);

            var carClass = document.createAttribute('class');
            carClass.value = 'cards';
            carCard.setAttribute('class', carClass.value);

            document.getElementById("output").appendChild(carCard);

            counter++;

        }); 

        // carlot.activateEvents();
        eventHandlers.activateEvents(); //only one function on dom.js so just call it with the require var

    }

    carInventory.loadInventory(populatePage);

//     return carlot;

// })(CarLot);
    

module.exports = { populatePage };



