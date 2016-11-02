'use strict';

(function() {
    function populatePage(inventory) {
        console.log("populatePage is running");
        var counter = 0;

        // Loop over the inventory and populate the page
        inventory.forEach(function(car) {
            var carHtml = `
			<h1>${car.make} ${car.model}</h1>
	  	`;

            var carCard = document.createElement('div');
            carCard.innerHTML = carHtml;

			var cardId = document.createAttribute('id');
            cardId.value = `card--${counter}`;
            carCard.setAttribute('id', cardId.value);

            console.log("carCard", carCard);

            document.getElementById("output").appendChild(carCard);

            (document.getElementById(`card--${counter}`)).addEventListener("click", function(){
            	console.log("Click event added");
            });

            counter++;

        });
		
		// Now that the DOM is loaded, establish all the event listeners needed
		// CarLot.activateEvents();
    }

    // Load the inventory and send a callback function to be
    // invoked after the process is complete

    CarLot.loadInventory(populatePage);

})(CarLot || {});
