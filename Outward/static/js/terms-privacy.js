window.addEventListener("load", function () {
  document.getElementById("footer-copyright-2").innerHTML =
    "Copyright &copy" +
    new Date().getFullYear() +
    " | Outward Industries&trade;";
  loader();
});

function loader() {
  window.scrollTo(0, 0);
  document.body.style = "overflow-y: hidden;";
  var loader = document.querySelector(".loader");
  loader.style.opacity = 1;
  loader.style.display = "flex";
  setTimeout(() => {
    $(".loader").fadeOut(500);
    $(".loader-span").fadeOut(500);
    document.body.style = "overflow-y: scroll;";
  }, 1100);
}
