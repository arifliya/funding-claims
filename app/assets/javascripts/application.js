/* global $ */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {
  window.GOVUKFrontend.initAll()
});

$("#backlink").click(function(event) {
    event.preventDefault();
    history.back(1);
});


// to add a URL to the button when any radio button is select - ADD NEW PROVIDER PAGE //
$('#confirmOrView').click(function() {
   if($('.confirm-data').is(':checked')) { location.href='year-end-claim-adult'; }
	 else if ($('.view-data').is(':checked')) { location.href='edit-data'; }
});



// $(".inner").blur(function() {
//
//   var input = $(this).val();
//
//   if($(this).val() == ""){
//      return false;
//    }
//
//   if ($(this).val().indexOf('.' ) > -1) {
//     $( this ).val( input );
//   }
//
//   else {
//       $( this ).val( input + '.00');
//   }
// });

$(".inner").blur(function() {
  var input = $(this).val();
  if($(this).val() == ""){
    return false;
  }
  if($(this).val().indexOf('£' ) > -1){
    return false;
  }
  if($(this).val() != "£"){
    $( this ).val( '£' + input );
  }
});


$(".inner").blur(function() {
  var input = $(this).val();
  if($(this).val() == ""){
     return false;
   }
  if($(this).val().indexOf('.' ) > -1){
     return false;
   }
  if($(this).val() != "."){
     $( this ).val( input + '.00' );
   }
});


$('#confirmSubmit').click(function() {
   if($('#confirmCheckBox').prop('checked')) {
     location.href='confirmation';
   } else {
     $('#errorSummary').removeClass('hidden');
     $('#errorMessage').addClass('govuk-form-group--error');
     $('#nationality-error').removeClass('hidden');
    }
});

$('#confirmCheckBox').click(function(){
  if($(this).prop('checked')) {
    $('#errorSummary').addClass('hidden');
    $('#errorMessage').removeClass('govuk-form-group--error');
    $('#nationality-error').addClass('hidden');
  }
});


var distance = $('.sticky').offset().top;
var $window = $(window);

$window.scroll(function() {
    if ( $window.scrollTop() >= distance ) {
        $('.sticky').addClass('stuck');
    } else {
        $('.sticky').removeClass('stuck');
    }
});
