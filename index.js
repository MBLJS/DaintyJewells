$(document).ready(function () {
  //for dropdown
  $('#home').click(function () {
    $("#droppdown").slideToggle();
  });

  $('#dropAccount').click(function () {
    $("#accountDrop").slideToggle(5);
  })

//for my slider

  $('.slickTrack').slick({
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
     vertical: true // Enable vertical scrolling
  });

  // Bind the up button
  $('#chevron-up').on('click', function(){
    $('.slickTrack').slick('slickPrev');
  });

  // Bind the down button
  $('#chevron-down').on('click', function(){
    $('.slickTrack').slick('slickNext');
  });

  //for number increase

$('#increaseBtn').click(function(){
  var currentvalue = $('#myNumber').val();
  $('#myNumber').val(parseInt(currentvalue)+1);
});

$('#decrementBnt').click(function(){
  var currentvalue = $('#myNumber').val();
  $('#myNumber').val(parseInt(currentvalue)-1);
});



$('#increaseBtn').click(function(event) {
  event.preventDefault();
})


$('#decrementBnt').click(function(event) {
  event.preventDefault();
})

})


