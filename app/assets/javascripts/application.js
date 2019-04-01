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


$("#backLink").click(function(event) {
    event.preventDefault();
    history.back(1);
});


// $(".inner").blur(function() {
//   var input = $(this).val();
//   if($(this).val() == ""){
//     return false;
//   }
//   if($(this).val().indexOf('£' ) > -1){
//     return false;
//   }
//   if($(this).val() != "£"){
//     $( this ).val( '£' + input );
//   }
// });
//
//
// $(".inner").blur(function() {
//   var input = $(this).val();
//   if($(this).val() == ""){
//      return false;
//    }
//   if($(this).val().indexOf('.' ) > -1){
//      return false;
//    }
//   if($(this).val() != "."){
//      $( this ).val( input + '.00' );
//    }
// });

// $(function() {
//   $('.fig-edit1').on("input", function() {
//     $('.1').text($(this).val());
//   });
// });
//
// $(function() {
//   $('.fig-edit2').on("input", function() {
//     $('.2').text($(this).val());
//   });
// });
//
// var a = parseInt($(".1").text());
// var b = parseInt($(".2").text());
//
// $(".fig-edit1").blur(function() {
//   $('#total').text('');
//   $('#total').append(a+b);
// });
//
// $(".fig-edit2").blur(function() {
//   $('#total').text('');
//   $('#total').append(a+b);
// });

// var total = 0;
// $('.fig').each(function(){
//   total += parseInt($(this).text());
// });
// $('#total').append("£"+total);
//
// $(".fig-edit").blur(function() {
//
//   var input = $(this).val();
//
//   if($(this).val() == ""){
//       return false;
//     }
// });
//
// var a = parseInt($(".fig-edit1").val());
// var b = parseInt($(".fig-edit2").val());
//
// $(".fig-edit1").blur(function() {
//   // $('#total').text('');
//   $('.1').append(a);
// });
//
// $(".fig-edit2").blur(function() {
//   $('#total').text('');
//   $('#total').append(a+b);
// });



// $(".fig-edit1").blur(function() {
//   var fig1 = $(this).val();
//   var fig2 = $(".fig-edit2").val();
//   $('.1').text('');
//   $('.1').append(fig1);
//   var total = parseInt(fig1) + parseInt(fig2);
//       $("#total").text('');
//       $("#total").append(total);
//
// });
//
// $(".fig-edit2").blur(function() {
//   var fig2 = $(this).val();
//   var fig1 = $(".fig-edit1").val();
//   $('.2').text('');
//   $('.2').append(fig2);
//   var total = parseInt(fig1) + parseInt(fig2);
//       $("#total").text('');
//       $("#total").append(total);
//
// });

$(function() {
  $('.fig-edit1').on("input", function() {
    var fig1 = $(this).val();
    var fig2 = $(".fig-edit2").val();
    $('.1').text('');
    $('.1').append(fig1);
    var total = parseInt(fig1) + parseInt(fig2);
        $("#total").text('');
        $("#total").append(total);
    if (fig1 == '') {
      $('.1').append('7000');
      var one = $('.1').text();
      var total = parseInt(one) + parseInt(fig2);
      $("#total").text('');
      $("#total").append(total);
    }

    if (fig2 == '' && fig1 == '') {
      $('#total').append('13000');
    }

  });
});

$(function() {
  $('.fig-edit1').on("input", function() {
    var fig1 = $(this).val();
    var two = $('.2').text();
    var total = parseInt(two) + parseInt(fig1);
    $("#total").text('');
    $("#total").append(total);

    var fig2 = $(".fig-edit2").val();
    if (fig2 == '' && fig1 == '') {
      $('#total').append('13000');
    }
  });
});

$(function() {
  $('.fig-edit2').on("input", function() {
    var fig2 = $(this).val();
      var fig1 = $(".fig-edit1").val();
      $('.2').text('');
      $('.2').append(fig2);
      var total = parseInt(fig1) + parseInt(fig2);
          $("#total").text('');
          $("#total").append(total);
      if (fig2 == '') {
        $('.2').append('6000');
        var two = $('.2').text();
        var total = parseInt(two) + parseInt(fig1);
        $("#total").text('');
        $("#total").append(total);
      }

      if (fig2 == '' && fig1 == '') {
        $('#total').append('13000');
      }
  });
});

$(function() {
  $('.fig-edit2').on("input", function() {
    var fig2 = $(this).val();
    var one = $('.1').text();
    var total = parseInt(one) + parseInt(fig2);
    $("#total").text('');
    $("#total").append(total);

    var fig1 = $(".fig-edit1").val();
    if (fig2 == '' && fig1 == '') {
      $('#total').append('13000');
    }
  });
});


// ********************* different interaction ********************** //


  $('#updateFigures').click(function(e) {

    var fig1 = $('.fig-edit1b').val();
    var fig2 = $('.fig-edit2b').val();
    var one = $('.1b').text();
    var two = $('.2b').text();

    var total = parseInt(fig1) + parseInt(fig2);

    if (fig1 == '' && fig2 == '') {
      return false;
    }

    if (fig1 == '' && fig2 == '') {
      return false;
    }

    if (fig1 == '0' && fig2 == '0') {
      return false;
    }

    if (fig1 == '') {
      var total = parseInt(one) + parseInt(fig2);
      $('.1b').text('9000');
      $("#total2").text(total);
    }

    if (fig2 == '') {
      var total = parseInt(fig1) + parseInt(two);
      $('.2b').text('10000');
      $("#total2").text(total);
    }

    else {
      // $("#total2").text('');
      $("#total2").text(total);

      // $(one).append('');
      // $(two).append('');
      $('.1b').text(fig1);
      $('.2b').text(fig2);
      // $(fig1).append('');
      // $(fig2).append('');
    }

    e.preventDefault();

  });


// ******************************* different interaction ********************************** //

$(function() {
  $('.fig-edit1c').on("input", function() {
    var fig1 = $(this).val();
    var fig2 = $(".fig-edit2c").val();
    var total = parseInt(fig1) + parseInt(fig2);

    $("#total3").text('');
    $("#total3").append(total);

    });
});


$(function() {
  $('.fig-edit2c').on("input", function() {
    var fig2 = $(this).val();
    var fig1 = $(".fig-edit1c").val();
    var total = parseInt(fig1) + parseInt(fig2);

    $("#total3").text('');
    $("#total3").append(total);

    });
});






    // $('#updateFigures').click(function(e) {
    //   var fig1 = $('.fig-edit1b').val();
    //   var fig2 = $(".fig-edit2b").val();
    //   $('.1b').text('');
    //   $('.1b').append(fig1);
    //   var total = parseInt(fig1) + parseInt(fig2);
    //       $("#total2").text('');
    //       $("#total2").append(total);
    //   if (fig1 == '') {
    //     $('.1b').append('9000');
    //     var one = $('.1').text();
    //     var total = parseInt(one) + parseInt(fig2);
    //     $("#total2").text('');
    //     $("#total2").append(total);
    //   }
    //
    //   if (fig2 == '' && fig1 == '') {
    //     $('#total2').append('19000');
    //   }
    //
    //   e.preventDefault();
    // });
    //
    //
    //
    // $('#updateFigures').click(function(e) {
    //   var fig1 = $('.fig-edit1b').val();
    //   var two = $('.2b').text();
    //   var total = parseInt(two) + parseInt(fig1);
    //   $("#total2").text('');
    //   $("#total2").append(total);
    //
    //   var fig2 = $(".fig-edit2b").val();
    //   if (fig2 == '' && fig1 == '') {
    //     $('#total2').append('19000');
    //   }
    //
    //   e.preventDefault();
    // });
    //
    //
    //
    //   $('updateFigures').click(function() {
    //     var fig2 = $('.fig-edit2b').val();
    //       var fig1 = $(".fig-edit1b").val();
    //       $('.2b').text('');
    //       $('.2b').append(fig2);
    //       var total = parseInt(fig1) + parseInt(fig2);
    //           $("#total2").text('');
    //           $("#total2").append(total);
    //       if (fig2 == '') {
    //         $('.2b').append('10000');
    //         var two = $('.2b').text();
    //         var total = parseInt(two) + parseInt(fig1);
    //         $("#total2").text('');
    //         $("#total2").append(total);
    //       }
    //
    //       if (fig2 == '' && fig1 == '') {
    //         $('#total2').append('19000');
    //       }
    //   });
    //
    //
    //
    //   $('#updateFigures').click(function() {
    //     var fig2 = $('.fig-edit2b').val();
    //     var one = $('.1b').text();
    //     var total = parseInt(one) + parseInt(fig2);
    //     $("#total2").text('');
    //     $("#total2").append(total);
    //
    //     var fig1 = $(".fig-edit1b").val();
    //     if (fig2 == '' && fig1 == '') {
    //       $('#total2').append('19000');
    //     }
    //   });





// // // // // // //
// var one = $('.1').text();
// var two = $(".fig-edit2").val();
// var total2 = parseInt(one) + parseInt(two);
//     $("#total").text('');
//     $("#total").append(total2);
// // // // // // //


// $(".fig-edit2").blur(function() {
//   var fig2 = $(this).val();
//   $('.2').text('');
//   $('.2').append(fig2);
//   $('#total').append(fig2);
// });

// var total = 0;
// $('.fig').each(function(){
//   total += parseInt($(this).text());
// });
// $('#total').append("£"+total);




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


$(window).scroll(function() {
    var windscroll = $(window).scrollTop();
    if ($(window).width() > 640) {
      if (windscroll >= 500) {
          $('#nav li a').addClass('active');
          $('.wrapper').each(function(i) {
              if ($(this).position().top <= windscroll - 0) {
                  $('#nav li a.active').removeClass('active');
                  $('#nav li a').eq(i).addClass('active');
              }
          });

      } else {

          $('#nav').removeClass('active');
          $('#nav li a.active').removeClass('active');
          $('#nav li a:first').addClass('active');
      }
    }
}).scroll();



// var $window = $(window);
// var distance = $('.sticky').offset().top;
// $window.scroll(function() {
//   if ( $window.scrollTop() >= distance ) {
//         $('.sticky').addClass('stuck');
//     } else {
//         $('.sticky').removeClass('stuck');
//     }
// });
