(function ($) {
    "use strict";

    var words = ['Argentina   ', 'Peru        ', 'Chile     ', 'España     ', 'Inglaterra     ', 'entre otros...     ' ],
	wordWrapper = document.getElementById('word'),
	wordWrapperContent = wordWrapper.innerHTML,
	addingWord = false,
	counter = 1;

	setInterval(function(){

		if(wordWrapperContent.length > 0 && !addingWord ) {
		wordWrapper.innerHTML = wordWrapperContent.slice(0, -1);
		wordWrapperContent = wordWrapper.innerHTML;
		} else {
		addingWord = true;
		}

		if( addingWord ){
		if( wordWrapperContent.length < words[counter].length  ) {
		wordWrapper.innerHTML = words[counter].slice(0, wordWrapperContent.length + 1);
		wordWrapperContent = wordWrapper.innerHTML;
		} else {
		if( counter < words.length) {
		  counter ++;
		}
		addingWord = false;
		}
		};

		if( counter == words.length) {
		counter = 0;
		}
    },80);
    var input = $('.validate-input .input100');
    $('.validate-form').on('submit', function () {
        var check = true; for (var i = 0; i < input.length; i++){
            if (validate(input[i]) == false) { showValidate(input[i]); check = false; }
        }
        return check;
    });
    $('.validate-form .input100').each(function () {
        $(this).focus(function () { hideValidate(this); });
    });
    function validate(input) {
        if ($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
            if ($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) { return false; }
        }

    else { if ($(input).val().trim() == '') { return false; } }
    }

    function showValidate(input) {
        var thisAlert = $(input).parent();
        $(thisAlert).addClass('alert-validate');
    }
    function hideValidate(input) {
        var thisAlert = $(input).parent(); $(thisAlert).removeClass('alert-validate');
    }
})(jQuery);
