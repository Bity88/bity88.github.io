$(function() {
    $(document).keypress(cheer);
  });
  
  function cheer(e) {
    $("<li>")
      .text(String.fromCharCode(e.which).toUpperCase() + "!")
      .appendTo("#cheers");
    setTimeout(removeCheer, 1000);
  }
  
  function removeCheer() {
    $("li").first().remove();
  }