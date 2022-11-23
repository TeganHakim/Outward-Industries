window.addEventListener('load', function() {
    document.getElementById("footer-copyright-2").innerHTML = "Copyright &copy" + new Date().getFullYear() + " | Outward Industries&trade;";
    loader();
});

function loader() {
    var loader = document.querySelector(".loader");
    loader.style.opacity = 1;
    loader.style.display = "flex";
    $(".loader").fadeOut(1000);
    $(".loader-span").fadeOut(2000);
}
