'use strict';

var CarLot = (function(carlot) {

    carlot.resetStyling = function(card) {
		console.log('card resetStyling', card);
		var allCards = document.getElementsByClassName('cards');

        var input = document.getElementById('textInput');
       
       for(var i=0; i<allCards.length; i++){
        	var currentCard = allCards[i];
        	console.log('currentCard', currentCard);
        	currentCard.classList.remove('clicked');
       }
       
       card.classList.add('clicked');

       carlot.changeStyling(card);

		input.value = '';
    };

	carlot.changeStyling = function(card) {	
		console.log('card in change styling', card);

        var input = document.getElementById('textInput');

        var selectedCard = document.getElementsByClassName('clicked')[0];

		var cardId = selectedCard.id.split('--', 2)[1];

		var selectedDescription = document.getElementById(`description--${cardId}`);
		// console.log('selectedDescription', selectedDescription);

		input.addEventListener('keyup', function(event){
			if(event.keyCode !== 13){
				selectedDescription.innerHTML = input.value;		
			}else{
				// carlot.resetStyling();
				input.value = '';
			}

		});


    };

    return carlot;

})(CarLot || {});