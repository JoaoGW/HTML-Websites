//Not on use anymore at version 1.4 - 01/08/2022
window.addEventListener("scroll", function () {
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
  });