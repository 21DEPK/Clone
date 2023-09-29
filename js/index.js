// it toggles the show class on the secondNavbar, which will control its visibility.
document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.getElementById("menu-button");
  const secondNavbar = document.getElementById("secondNavbar");

  menuButton.addEventListener("click", function () {
    secondNavbar.classList.toggle("show");
  });
});
