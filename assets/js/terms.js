var footer2 = document.querySelector("#footer-scroll");


function goHome() {
    if (landing.style.display != "none") {
        window.location.href = "#landing";
    } else {
        window.location.reload();
    }
}

document.getElementById("footer-copyright-2").innerHTML = "Copyright &copy" + new Date().getFullYear() + " | Outward Industries&trade;";