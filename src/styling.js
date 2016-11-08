'use strict';

var CarLot = (function(carlot){
	
	carlot.changeStyling = function(){
		console.log('changeStyling is running');
		// console.log('card', card);
		var card = event.currentTarget;
		var input = document.getElementById('textInput');
		input.focus();
		card.classList.add('clicked');
	}



	carlot.changeDescription = function(){
		console.log('changeDescription is running');
		console.log('event.currentTarget', event.currentTarget);
		var card = document.getElementsByClassName('clicked');
		var cardId = (card[0].id).split('--', 2)[1];
		var selectedDescription = document.getElementById(`description--${cardId}`);
		// console.log('selectedDescription.innerHTML', selectedDescription.innerHTML);
		var input = document.getElementById('textInput');
		selectedDescription.innerHTML = input.value;		

	}



	carlot.resetStyling = function(){
		console.log('resetStyling is running');
		var allCards = document.getElementsByClassName('cards');
        for (var i = 0; i < allCards.length; i++) {
            var currentCard = allCards[i];
            console.log('currentCard', currentCard);
            currentCard.classList.remove('clicked');
        }
	}

	return carlot;

})(CarLot || {})