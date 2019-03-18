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
