/*-----------------------------------------------------
* ▼ steps ▼
-----------------------------------------------------*/
var Steps = function() {

  Steps.$_stepSection;
  Steps.$_stepButton;
  Steps._stepsArray;

  this._init.apply( this );

};

Steps.prototype = {

  //-------------------------------------------------
  // initialize
  //-------------------------------------------------
  _init : function() {

    Steps.$_stepSection = $(".js-step-section");
    Steps.$_stepButton = $(".js-step-button");

    Steps._stepLength = Steps.$_stepSection.length;
    Steps._stepsArray = [];

    for(var i = 0; i < Steps._stepLength; i++) {

      if( Steps.$_stepSection[i] ) {

        Steps._stepsArray.push( Steps.$_stepSection[i] );

      } else {

        break;

      }

    };

    Steps.$_stepButton.on( "click", $.proxy( this._onClick, this ) );

  },

  //-------------------------------------------------
  // onClick
  //-------------------------------------------------
  _onClick : function( i_event ) {

    var _target = i_event.target;
    var _step   = _target.dataset.num;

    $(Steps._stepsArray[_step]).addClass("is-start");

    return false;

  }

};
