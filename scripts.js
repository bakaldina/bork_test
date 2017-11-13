$(document).ready(function(){
    var link = $("button");
    var popup = $("div.form");
    var close = $("a.close");
    
    link.click(function(event){
      event.preventDefault();
      popup.addClass("form-show");
    });
    
    close.click(function(event){
      event.preventDefault();
      popup.removeClass("form-show");
    });
  });