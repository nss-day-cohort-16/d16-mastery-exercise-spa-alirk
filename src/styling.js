'use strict';

var CarLot = (function(carlot) {

    carlot.resetStyling = function() {
            console.log("resetStyling is running");
        };

	carlot.changeStyling = function(cardClicked, colorName) {
            console.log("changeStyling is running");
        };

    return carlot;

})(CarLot || {});
