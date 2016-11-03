'use strict';

var CarLot = (function(carlot){

	carlot.activateEvents = function(event){
		console.log("activateEvents is running");
		var card = event.currentTarget;
		console.log('card in activateEvents', card);

		document.getElementById('textInput').focus();
		
		carlot.changeStyling(card);
	};
	
	return carlot;

})(CarLot || {});