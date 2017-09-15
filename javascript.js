// fade in welcome screen

$.fn.center = function () {
  this.css("position","absolute");
  this.css("top", Math.max(0, (
    ($(window).height() - $(this).outerHeight()) / 2) +
     $(window).scrollTop()) + "px"
  );
  this.css("left", Math.max(0, (
    ($(window).width() - $(this).outerWidth()) / 2) +
     $(window).scrollLeft()) + "px"
  );
  return this;
}
$("#overlay").show();
$("#overlay-content").show().center();

setTimeout(function(){
  $("#overlay").fadeOut();
}, 3000);


// makes slider slide up
$('.trigger, .slider').click(function() {
  $('.slider').toggleClass('close');
});

// $(function(){
//
// var appendthis =  ("<div class='modal-overlay js-modal-close'></div>");
//
//   $('a[data-modal-id]').click(function(e) {
//     e.preventDefault();
//     $("body").append(appendthis);
//     $(".modal-overlay").fadeTo(500, 0.7);
//     //$(".js-modalbox").fadeIn(500);
//     var modalBox = $(this).attr('data-modal-id');
//     $('#'+modalBox).fadeIn($(this).data());
//   });
//
//
// $(".js-modal-close, .modal-overlay").click(function() {
//   $(".modal-box, .modal-overlay").fadeOut(500, function() {
//     $(".modal-overlay").remove();
//   });
// });
//
// $(window).resize(function() {
//   $(".modal-box").css({
//     top: ($(window).height() - $(".modal-box").outerHeight()) / 2,
//     left: ($(window).width() - $(".modal-box").outerWidth()) / 2
//   });
// });
//
// $(window).resize();
//
// });
