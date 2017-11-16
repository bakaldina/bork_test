$(document).ready(function() {
  var link = $(".btn");
  var popup = $(".main");
  var close = $(".modal_close");

  link.click(function(event) {
    event.preventDefault();
    popup.addClass("modal-show");
  });

  close.click(function(event) {
    event.preventDefault();
    popup.removeClass("modal-show");
  });
  // validation
  $("form").validate();
  //
});
