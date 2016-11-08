'use strict';

var CarLot = (function(carlot){
    
    carlot.populatePage = function(inventory){
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

            // (document.getElementById(`card--${counter}`)). 
            // addEventListener("click", function(event){
            //     carlot.activateEvents(event.currentTarget);
            // });

            counter++;

        }); 

        // carlot.activateEvents = function(card){
        //     console.log('activateEvents is running');
        //     console.log('card', card);

        //     var input = document.getElementById('textInput');
        //     input.focus();

        //     carlot.changeStyling(card);
        //     carlot.changeDescription(card);
        //     // carlot.resetStyling();
        // }

        carlot.activateEvents();

    };

// Load the inventory and send a callback function to be invoked after the process is complete
    carlot.loadInventory(carlot.populatePage);

    return carlot;

})(CarLot);
    
    