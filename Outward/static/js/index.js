var nav = document.querySelector("#navbar");

var landing = document.querySelector("#landing");
var title = landing.querySelector("#title");
var splash = landing.querySelector("#splash");
var content = landing.querySelector("#content");
var startButton = landing.querySelector("#button");

var products = document.querySelector("#products");
var productTitle = products.querySelector("#productTitle");
var productSplash = products.querySelector("#splash");
var productContent = products.querySelector("#content");

var footer = document.querySelector("#footer-show");
var footer2 = document.querySelector("#footer-scroll");

function fadeZoom(delay1=1500, delay2=15) {
    nav.classList.add("no-shadow");
    splash.style.opacity = 0;
    for (var i = 0; i < content.children.length; i++) {
        content.children[i].style.opacity = 0;
    }
    for (var i = 0; i < landing.children.length; i++) {
        landing.children[i].style.opacity = 0;
    }
    splash.style.transform = "scale(3)";
    setTimeout(function() {
        nav.classList.toggle("wood");
        nav.classList.toggle("cove");
        nav.classList.remove("no-shadow");
        landing.style.display = "none";
        products.style.display = "flex";
        productSplash.style.opacity = 1;
        setTimeout(function() {
            for (var i = 0; i < productContent.children.length; i++) {
                productContent.children[i].style.opacity = 1;
            }
            for (var i = 0; i < products.children.length; i++) {
                products.children[i].style.opacity = 1;
            }
        }, delay2);
    }, delay1);
}

var switchPageTimeout;

startButton.addEventListener('mouseover', () => {
    switchPageTimeout = setTimeout(function () {
        switchPage();
    }, 3500);
    
});

startButton.addEventListener('mouseout', () => {
   clearTimeout(switchPageTimeout);  
});

function switchPage() {
    fadeZoom();
}

function goHome() {
    if (landing.style.display != "none") {
        window.location.href = "#landing";
    } else {
        window.location = "/";
    }
}

let opacity;

document.addEventListener('scroll', () => {
    let height = footer2.clientHeight;
    if (window.scrollY > 0) {
        opacity = 1 - (window.scrollY / height);
    } else {
        opacity += height/window.scrollY;
    }
    footer.style.opacity = opacity;
    content.style.opacity = opacity;
    if (window.innerWidth <= 1750) {
        title.style.opacity = opacity; 
        productTitle.style.opacity = opacity;
    } else {
        title.style.opacity = 1;
        productTitle.style.opacity = 1;
    }
    footer2.style.setProperty("--opacity", opacity);

})

window.addEventListener('load', function() {
    document.getElementById("footer-copyright").innerHTML = "Copyright &copy" + new Date().getFullYear() + " | Outward Industries&trade;";
    document.getElementById("footer-copyright-2").innerHTML = "Copyright &copy" + new Date().getFullYear() + " | Outward Industries&trade;";

    if (window.location.href.split("/#")[1] == "products") {
        fadeZoom(0, 0);
    } 
});