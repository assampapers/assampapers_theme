$(document).ready(function() {
  // Show and hide password
  $("#togglePassword").change(function() {
    const password = $("#password");

    if (password.attr("type") === "password") {
      password.attr("type", "text");
    } else {
      password.attr("type", "password");
    }
  });
});
