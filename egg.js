$(document).ready(function(){

  $(document).keydown(function(e) {
    if (e.keyCode === 27) {
      e.preventDefault();
      window.location.replace("index.html");
    }
  });

});
