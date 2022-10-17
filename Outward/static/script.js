var landing = document.querySelector("#landing")
var splash = landing.querySelector("#splash");
var content = landing.querySelector("#content");
var startButton = landing.querySelector("#button");

var start = document.querySelector("#start");
var splashStart = start.querySelector("#splash");
var startContent = start.querySelector("#content");

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

document.getElementById("footer-copyright").innerHTML = "Copyright &copy" + new Date().getFullYear() + " | Outward Industries";
