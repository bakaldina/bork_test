$(document).ready(function(){
    console.log('work');

    var link = $("button");
    var popup = $(".modal");
    var close = $(".close");
    
    link.click(function(event){
      event.preventDefault();
      popup.addClass("modal-show");
    });
    
    close.click(function(event){
      event.preventDefault();
      popup.removeClass("modal-show");
    }); 
    // validation 

    // 

  });