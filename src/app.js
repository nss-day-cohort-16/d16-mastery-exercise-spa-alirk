'use strict';

var CarLot = 
(function(carlot){
    
    carlot.populatePage = function(inventory){
    console.log("populatePage is running");
    var counter = 0;

// Loop over the inventory and populate the page
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

        (document.getElementById(`card--${counter}`)).addEventListener("click", carlot.activateEvents);
        
        counter++;

    });  // close .forEach function

};

// Load the inventory and send a callback function to be invoked after the process is complete
carlot.loadInventory(carlot.populatePage);

return carlot;

})(CarLot);
    