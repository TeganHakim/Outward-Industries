var nav = document.querySelector("#navbar");

var landing = document.querySelector("#landing");
var title = landing.querySelector("#title");
var splash = landing.querySelector("#splash");
var content = landing.querySelector("#content");
var startButton = landing.querySelector("#button");

var about = document.querySelector("#about");
var aboutTitle = about.querySelector("#aboutTitle");
var aboutSplash = about.querySelector("#splash");
var aboutContent = about.querySelector("#content");

var products = document.querySelector("#products");
var productTitle = products.querySelector("#productTitle");
var productSplash = products.querySelector("#splash");
var productContent = products.querySelector("#content");

var pricing = document.querySelector("#pricing");
var priceTitle = pricing.querySelector("#priceTitle");
var priceSplash = pricing.querySelector("#splash");
var priceContent = pricing.querySelector("#content");

var portfolio = document.querySelector("#portfolio");
var portfolioTitle = portfolio.querySelector("#portfolioTitle");
var portfolioSplash = portfolio.querySelector("#splash");
var portfolioContent = portfolio.querySelector("#content");

var contact = document.querySelector("#contact");
var contactTitle = contact.querySelector("#contactTitle");
var contactSplash = contact.querySelector("#splash");
var contactContent = contact.querySelector("#content");

var footer = document.querySelector("#footer-show");
var footer2 = document.querySelector("#footer-scroll");

var burger = document.querySelector(".burger");
var mobileNav = document.querySelector(".mobile-nav");

function fadeZoom(screen, delay1 = 1500, delay2 = 15) {
  if (burger.classList.contains("burger-active")) {
    burger.click();
  }

  let toggle = true;
  if (nav.classList.contains("wood")) {
    if (about.style.display == "flex") {
      if (screen == "about") {
        return;
      } else if (screen == "products") {
        delay1 = 0;
        toggle = false;
      } else if (screen == "pricing") {
        delay1 = 0;
        toggle = false;
      } else if (screen == "portfolio") {
        delay1 = 0;
        toggle = false;
      } else if (screen == "contact") {
        delay1 = 0;
        toggle = false;
      }
    }
    if (products.style.display == "flex") {
      if (screen == "about") {
        delay1 = 0;
        toggle = false;
      } else if (screen == "products") {
        return;
      } else if (screen == "pricing") {
        delay1 = 0;
        toggle = false;
      } else if (screen == "portfolio") {
        delay1 = 0;
        toggle = false;
      } else if (screen == "contact") {
        delay1 = 0;
        toggle = false;
      }
    }
    if (pricing.style.display == "flex") {
      if (screen == "about") {
        delay1 = 0;
        toggle = false;
      } else if (screen == "products") {
        delay1 = 0;
        toggle = false;
      } else if (screen == "pricing") {
        return;
      } else if (screen == "portfolio") {
        delay1 = 0;
        toggle = false;
      } else if (screen == "contact") {
        delay1 = 0;
        toggle = false;
      }
    }
    if (portfolio.style.display == "flex") {
      if (screen == "about") {
        delay1 = 0;
        toggle = false;
      } else if (screen == "products") {
        delay1 = 0;
        toggle = false;
      } else if (screen == "pricing") {
        delay1 = 0;
        toggle = false;
      } else if (screen == "portfolio") {
        return;
      } else if (screen == "contact") {
        delay1 = 0;
        toggle = false;
      }
    }
    if (contact.style.display == "flex") {
      if (screen == "about") {
        delay1 = 0;
        toggle = false;
      } else if (screen == "products") {
        delay1 = 0;
        toggle = false;
      } else if (screen == "pricing") {
        delay1 = 0;
        toggle = false;
      } else if (screen == "portfolio") {
        delay1 = 0;
        toggle = false;
      } else if (screen == "contact") {
        return;
      }
    }
  }
  nav.classList.add("no-shadow");
  splash.style.opacity = 0;
  for (var i = 0; i < content.children.length; i++) {
    content.children[i].style.opacity = 0;
  }
  for (var i = 0; i < landing.children.length; i++) {
    landing.children[i].style.opacity = 0;
  }
  splash.style.transform = "scale(3)";
  setTimeout(function () {
    if (toggle) {
      nav.classList.toggle("wood");
      nav.classList.toggle("cove");
    }
    nav.classList.remove("no-shadow");

    landing.style.display = "none";

    if (screen == "about") {
      about.style.display = "flex";
      aboutSplash.style.opacity = 1;

      products.style.display = "none";
      productSplash.style.opacity = 0;

      pricing.style.display = "none";
      priceSplash.style.opacity = 0;

      portfolio.style.display = "none";
      portfolioSplash.style.opacity = 0;

      contact.style.display = "none";
      contactSplash.style.opacity = 0;
    } else if (screen == "products") {
      about.style.display = "none";
      aboutSplash.style.opacity = 0;

      products.style.display = "flex";
      productSplash.style.opacity = 1;

      pricing.style.display = "none";
      priceSplash.style.opacity = 0;

      portfolio.style.display = "none";
      portfolioSplash.style.opacity = 0;

      contact.style.display = "none";
      contactSplash.style.opacity = 0;
    } else if (screen == "pricing") {
      about.style.display = "none";
      aboutSplash.style.opacity = 0;

      products.style.display = "none";
      productSplash.style.opacity = 0;

      pricing.style.display = "flex";
      priceSplash.style.opacity = 1;

      portfolio.style.display = "none";
      portfolioSplash.style.opacity = 0;

      contact.style.display = "none";
      contactSplash.style.opacity = 0;
    } else if (screen == "portfolio") {
      about.style.display = "none";
      aboutSplash.style.opacity = 0;

      products.style.display = "none";
      productSplash.style.opacity = 0;

      pricing.style.display = "none";
      priceSplash.style.opacity = 0;

      portfolio.style.display = "flex";
      portfolioSplash.style.opacity = 1;

      contact.style.display = "none";
      contactSplash.style.opacity = 0;
    } else if (screen == "contact") {
      about.style.display = "none";
      aboutSplash.style.opacity = 0;

      products.style.display = "none";
      productSplash.style.opacity = 0;

      pricing.style.display = "none";
      priceSplash.style.opacity = 0;

      portfolio.style.display = "none";
      portfolioSplash.style.opacity = 0;

      contact.style.display = "flex";
      contactSplash.style.opacity = 1;
    }
    setTimeout(function () {
      if (screen != "about") {
        for (var i = 0; i < aboutContent.children.length; i++) {
          aboutContent.children[i].style.opacity = 0;
        }
        for (var i = 0; i < about.children.length; i++) {
          about.children[i].style.opacity = 0;
        }
      }
      if (screen != "products") {
        for (var i = 0; i < productContent.children.length; i++) {
          productContent.children[i].style.opacity = 0;
        }
        for (var i = 0; i < products.children.length; i++) {
          products.children[i].style.opacity = 0;
        }
      }
      if (screen != "pricing") {
        for (var i = 0; i < priceContent.children.length; i++) {
          priceContent.children[i].style.opacity = 0;
        }
        for (var i = 0; i < pricing.children.length; i++) {
          pricing.children[i].style.opacity = 0;
        }
      }
      if (screen != "portfolio") {
        for (var i = 0; i < portfolioContent.children.length; i++) {
          portfolioContent.children[i].style.opacity = 0;
        }
        for (var i = 0; i < portfolio.children.length; i++) {
          portfolio.children[i].style.opacity = 0;
        }
      }
      if (screen != "contact") {
        for (var i = 0; i < contactContent.children.length; i++) {
          contactContent.children[i].style.opacity = 0;
        }
        for (var i = 0; i < contact.children.length; i++) {
          contact.children[i].style.opacity = 0;
        }
      }
      if (screen == "about") {
        window.location.href = "#about";
        for (var i = 0; i < aboutContent.children.length; i++) {
          aboutContent.children[i].style.opacity = 1;
        }
        for (var i = 0; i < about.children.length; i++) {
          about.children[i].style.opacity = 1;
        }
      } else if (screen == "products") {
        window.location.href = "#products";
        for (var i = 0; i < productContent.children.length; i++) {
          productContent.children[i].style.opacity = 1;
        }
        for (var i = 0; i < products.children.length; i++) {
          products.children[i].style.opacity = 1;
        }
      } else if (screen == "pricing") {
        window.location.href = "#pricing";
        for (var i = 0; i < priceContent.children.length; i++) {
          priceContent.children[i].style.opacity = 1;
        }
        for (var i = 0; i < pricing.children.length; i++) {
          pricing.children[i].style.opacity = 1;
        }
      } else if (screen == "portfolio") {
        window.location.href = "#portfolio";
        for (var i = 0; i < portfolioContent.children.length; i++) {
          portfolioContent.children[i].style.opacity = 1;
        }
        for (var i = 0; i < portfolio.children.length; i++) {
          portfolio.children[i].style.opacity = 1;
        }
      } else if (screen == "contact") {
        window.location.href = "#contact";
        for (var i = 0; i < contactContent.children.length; i++) {
          contactContent.children[i].style.opacity = 1;
        }
        for (var i = 0; i < contact.children.length; i++) {
          contact.children[i].style.opacity = 1;
        }
      }
    }, delay2);
  }, delay1);
}

var switchPageTimeout;

startButton.addEventListener("mouseover", () => {
  switchPageTimeout = setTimeout(function () {
    switchPage();
  }, 3500);
});

startButton.addEventListener("mouseout", () => {
  clearTimeout(switchPageTimeout);
});

function switchPage() {
  fadeZoom("products");
}

function goHome() {
  if (landing.style.display != "none") {
    window.location.href = "#landing";
  } else {
    window.location = "/";
  }
}

let opacity;

document.addEventListener("scroll", () => {
  let height = footer2.clientHeight;
  if (window.scrollY > 0) {
    opacity = 1 - window.scrollY / height;
  } else {
    opacity += height / window.scrollY;
  }
  footer.style.opacity = opacity;
  content.style.opacity = opacity;
  if (window.innerWidth <= 1750 && window.innerHeight >= 900) {
    title.style.opacity = opacity;
    if (about.style.display != "none") {
      aboutTitle.style.opacity = opacity;
    }
    if (products.style.display != "none") {
      productTitle.style.opacity = opacity;
    }
    if (pricing.style.display != "none") {
      priceTitle.style.opacity = opacity;
    }
    if (portfolio.style.display != "none") {
      portfolioTitle.style.opacity = opacity;
    }
    if (contact.style.display != "none") {
      contactTitle.style.opacity = opacity;
    }
  } else {
    title.style.opacity = 1;
    if (about.style.display != "none") {
      aboutTitle.style.opacity = 1;
    }
    if (products.style.display != "none") {
      productTitle.style.opacity = 1;
    }
    if (pricing.style.display != "none") {
      priceTitle.style.opacity = 1;
    }
    if (portfolio.style.display != "none") {
      portfolioTitle.style.opacity = 1;
    }
    if (contact.style.display != "none") {
      contactTitle.style.opacity = 1;
    }
  }
  footer2.style.setProperty("--opacity", opacity);
});

window.addEventListener("load", function () {
  document.getElementById("footer-copyright").innerHTML =
    "Copyright &copy" +
    new Date().getFullYear() +
    " | Outward Industries&trade;";
  document.getElementById("footer-copyright-2").innerHTML =
    "Copyright &copy" +
    new Date().getFullYear() +
    " | Outward Industries&trade;";

  if (window.location.href.split("/#")[1] == "about") {
    fadeZoom("about", 0, 0);
  }
  if (window.location.href.split("/#")[1] == "products") {
    fadeZoom("products", 0, 0);
  }
  if (window.location.href.split("/#")[1] == "pricing") {
    fadeZoom("pricing", 0, 0);
  }
  if (window.location.href.split("/#")[1] == "portfolio") {
    fadeZoom("portfolio", 0, 0);
  }
  if (window.location.href.split("/#")[1] == "contact") {
    fadeZoom("contact", 0, 0);
  }
  loader();
});

// Loader
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

// Burger
var animatingBurger = false;
burger.addEventListener("click", () => {
  if (animatingBurger) {
    return;
  }
  animatingBurger = true;
  footer2.classList.toggle("hide-footer");
  burger.classList.toggle("burger-active");
  if (mobileNav.classList.contains("mobile-nav-active")) {
    mobileNav.setAttribute("style", "opacity: 0;");
    setTimeout(() => {
      mobileNav.classList.remove("mobile-nav-active");
      animatingBurger = false;
    }, 500);
  } else {
    mobileNav.classList.add("mobile-nav-active");
    setTimeout(() => {
      mobileNav.setAttribute("style", "opacity: 1;");
    }, 50);
    setTimeout(() => {
      animatingBurger = false;
    }, 500);
  }
});

const aboutCards = Array.from(document.querySelectorAll(".about .about-info .column-2"));
const productCards = Array.from(document.querySelectorAll(".products .product-info .column-3"));
const pricingCards = Array.from(document.querySelectorAll(".pricing .price-info .column-3"));

const cards = aboutCards.concat(productCards).concat(pricingCards);

const settings = {
  strength: 4,
  perspective: 1000,
}

cards.forEach((card) => {
  card.addEventListener("mousemove", cardMouseMove);
  card.addEventListener("mouseout", cardMouseOut);
});

function cardMouseMove(event) {
  if (window.innerWidth >= 1200) {
    const card = event.currentTarget;
    const cardWidth = card.offsetWidth;
    const cardHeight = card.offsetHeight;
    const centerX = card.offsetLeft + cardWidth/2;
    const centerY = card.offsetTop + cardHeight/2;
    const mouseX = event.clientX - centerX;
    const mouseY = event.clientY - centerY;
    const rotateX = (settings.strength*mouseY/(cardHeight/2)).toFixed(2);
    const rotateY = ((-1)*settings.strength*mouseX/(cardWidth/2)).toFixed(2);
    card.style.transform = `perspective(${settings.perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  }
}

function cardMouseOut(event) {
  const card = event.currentTarget;
  card.style.transform = 'rotateX(0deg) rotateY(0deg)';
}