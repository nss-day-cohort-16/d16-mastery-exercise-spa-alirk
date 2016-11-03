'use strict';

var CarLot = (function(carlot){

	carlot.activateEvents = function(event){
		var card = event.currentTarget;
		console.log("activateEvents is running");
		console.log('card in activateEvents', card);

		document.getElementById('textInput').focus();
		
		CarLot.resetStyling(card);
	};
	
	return carlot;

})(CarLot || {});