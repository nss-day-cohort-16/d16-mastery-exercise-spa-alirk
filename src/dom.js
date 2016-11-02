'use strict';

var CarLot = (function(carlot){

	carlot.activateEvents = function(DOMelement){
		console.log("activateEvents running", DOMelement);
	};
	
	return carlot;

})(CarLot || {});