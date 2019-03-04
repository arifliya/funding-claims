/* global $ */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {
  window.GOVUKFrontend.initAll()
})


// to add a URL to the button when any radio button is select - ADD NEW PROVIDER PAGE //
$('#confirmOrView').click(function() {
   if($('.confirm-data').is(':checked')) { location.href='year-end-claim-adult'; }
	 else if ($('.view-data').is(':checked')) { location.href='edit-data'; }
});
