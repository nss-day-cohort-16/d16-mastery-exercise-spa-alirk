var CarLot = (function(carlot) {

    carlot.activateEvents = function() {
        console.log('activateEvents is running');

        var allCards = document.getElementsByClassName('cards');

        for (var i = 0; i < allCards.length; i++) {
            var currentCard = allCards[i];
            console.log('currentCard', currentCard);
            currentCard.addEventListener('click', carlot.changeStyling);
        }

        var input = document.getElementById('textInput')
        input.addEventListener('keyup', function(event){
			if(event.keyCode !== 13){ // typing
				carlot.changeDescription();
			}else{ // on Enter
				input.value = '';
				carlot.resetStyling();
			}
		});

    }


    return carlot

})(CarLot || {})
