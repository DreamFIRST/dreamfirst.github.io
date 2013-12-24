onload = function() {
  $(".cloud").bind('animationiteration', function() {
    $("#" + this.id).toggleClass("cycleclouds");
  });
};