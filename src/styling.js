'use strict';

var CarLot = (function(carlot) {

    carlot.resetStyling = function(card) {
        var input = document.getElementById('textInput');
        card.classList.remove('clicked');
        card.classList.add('cards');
		input.value = '';
    };

	carlot.changeStyling = function(card) {        
        card.classList.remove('cards');
        card.classList.add('clicked');

        var input = document.getElementById('textInput');

        var currentCard = document.getElementsByClassName('clicked')[0];

		var cardId = currentCard.id.split('--', 2)[1];

		var currentDescription = document.getElementById(`description--${cardId}`);
		// console.log('currentDescription', currentDescription);

		input.addEventListener('keydown', function(event){
			if(event.keyCode !== 13){
				currentDescription.innerHTML = input.value;		
			}else{
				carlot.resetStyling(currentCard);
				input.value = '';
			}

		});


    };

    return carlot;

})(CarLot || {});