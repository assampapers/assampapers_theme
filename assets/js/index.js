$(document).ready(function() {
  // Humberer button
  $(".humburger-button").on("click", function() {
    $(".animated-icon").toggleClass("open");
  });

  // Colors hex array
  const colors = [
    "#085f63",
    "#f23557",
    "#824c96",
    "#24b273",
    "#5a3d5c",
    "#167a8b",
    "#caa653"
  ];

  $(".badge").each(function() {
    const random = Math.floor(Math.random() * colors.length);
    $(this).css("background-color", colors[random]);
  });
});
