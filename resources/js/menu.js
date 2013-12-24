onload = function() {
  $("#menu-toggle").click(function() {
    toggleMenu();
  });
};

function toggleMenu() {
  visibilityStatus = $("nav ul").css('display');
  if (visibilityStatus == 'none') {
    $("nav ul").css('display', 'block');
  } else {
    $("nav ul").css('display', 'none');
  }
}