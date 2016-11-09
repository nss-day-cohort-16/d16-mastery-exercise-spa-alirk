'use strict';

// var CarLot = (function(carlot) {

    // carlot.
    var carInventory = require('./CarLot');
    var styling = require('./styling');


    var activateEvents = function() {
        console.log('activateEvents is running');

        var allCards = document.getElementsByClassName('cards');

        for (var i = 0; i < allCards.length; i++) {
            var currentCard = allCards[i];
            currentCard.addEventListener('click', styling.changeStyling);
        }

        var input = document.getElementById('textInput');
        input.addEventListener('keyup', function(event){
			if(event.keyCode !== 13){ // typing
				styling.changeDescription();
			}else{ // on Enter
				input.value = '';
				styling.resetStyling();
			}
		});

    };


    // return carlot

// })(CarLot || {})

module.exports = { activateEvents };