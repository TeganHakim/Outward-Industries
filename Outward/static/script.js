var landing = document.querySelector("#landing")
var splash = landing.querySelector("#splash");
var content = landing.querySelector("#content");
var startButton = landing.querySelector("#button");

var start = document.querySelector("#start");
var splashStart = start.querySelector("#splash");
var startContent = start.querySelector("#content");

var footer = document.querySelector("#footer-show");
var footer2 = document.querySelector("#footer-scroll");

function fadeZoom() {
    splash.style.opacity = 0;
    for (var i = 0; i < content.children.length; i++) {
        content.children[i].style.opacity = 0;
    }
    splash.style.transform = "scale(3)";
    setTimeout(function() {
        landing.style.display = "none";
        start.style.display = "flex";
        splashStart.style.opacity = 1;
        setTimeout(function() {
            for (var i = 0; i < startContent.children.length; i++) {
                startContent.children[i].style.opacity = 1;
            }
        }, 15);
    }, 1500);
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

let opacity;

document.addEventListener('scroll', () => {
    let height = footer2.clientHeight;
    if (window.scrollY > 0) {
        opacity = 1 - (window.scrollY / height);
    } else {
        opacity += height/window.scrollY;
    }
    footer.style.opacity = opacity;
    footer2.style.setProperty("--opacity", opacity);
})


document.getElementById("footer-copyright").innerHTML = "Copyright &copy" + new Date().getFullYear() + " | Outward Industries&trade;";
document.getElementById("footer-copyright-2").innerHTML = "Copyright &copy" + new Date().getFullYear() + " | Outward Industries&trade;";
