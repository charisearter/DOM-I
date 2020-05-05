const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//navigation

//select all links in navigation
let allNav = document.querySelectorAll('nav a');
//change nav links color
allNav.forEach((a) => {a.style.color = 'green';})

//select all links in navigation
let allH4 = document.querySelectorAll('h4');
//change nav links color
allH4.forEach((h4) => {h4.style.color = 'blue';})

var firstLink = document.querySelector('nav > a:nth-child(1)')
var secondLink = document.querySelector('nav > a:nth-child(2)')
var thirdLink = document.querySelector('nav > a:nth-child(3)')
var fourthLink = document.querySelector('nav > a:nth-child(4)')
var fifthLink = document.querySelector('nav > a:nth-child(5)')
var sixthLink = document.querySelector('nav > a:nth-child(6)')

firstLink.textContent = siteContent["nav"]["nav-item-1"]
secondLink.textContent = siteContent["nav"]["nav-item-2"]
thirdLink.textContent = siteContent["nav"]["nav-item-3"]
fourthLink.textContent = siteContent["nav"]["nav-item-4"]
fifthLink.textContent = siteContent["nav"]["nav-item-5"]
sixthLink.textContent = siteContent["nav"]["nav-item-6"]

//targets all of nav
let nav = document.querySelector('nav')

//create new links
let newLink = document.createElement('a');
let otherLink = document.createElement('a');

//link addresses
newLink.href = "https://www.google.com/";
otherLink.href="https://theoatmeal.com/"

//give link text
newLink.textContent = "Whatever";
otherLink.textContent = "Sigh";

//put at beginning of nav
nav.prepend(newLink);

//put at end of nav
nav.appendChild(otherLink);

//end navigation

//cta start
var ctaH1 = document.querySelector('section.cta > div > h1')
var ctaBtn = document.querySelector('section.cta > div > button')


ctaH1.textContent = siteContent["cta"]["h1"]
ctaBtn.textContent = siteContent["cta"]["button"]

//add cta image

let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent["cta"]["img-src"]);

//end cta

//main content start
//text above image
var feature = document.querySelector('div.top-content > div:nth-child(1) > h4')
var featureTxt = document.querySelector('div.top-content > div:nth-child(1) > p')
var about = document.querySelector('div.top-content > div:nth-child(2) > h4')
var aboutTxt = document.querySelector('div.top-content > div:nth-child(2) > p')

//add middle image
let midImg = document.getElementById("middle-img");
midImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

//add text on bottom of image
var service = document.querySelector('div.bottom-content > div:nth-child(1) > h4')
var serviceTxt = document.querySelector('div.bottom-content > div:nth-child(1) > p')
var product = document.querySelector('div.bottom-content > div:nth-child(2) > h4')
var productTxt = document.querySelector('div.bottom-content > div:nth-child(2) > p')
var vision = document.querySelector('div.bottom-content > div:nth-child(3) > h4')
var visionTxt = document.querySelector('div.bottom-content > div:nth-child(3) > p')

feature.textContent = siteContent["main-content"]["features-h4"];
featureTxt.textContent = siteContent["main-content"]["features-content"];
about.textContent = siteContent["main-content"]["about-h4"];
aboutTxt.textContent = siteContent["main-content"]["about-content"];
service.textContent = siteContent["main-content"]["services-h4"];
serviceTxt.textContent = siteContent["main-content"]["services-content"];
product.textContent = siteContent["main-content"]["product-h4"];
productTxt.textContent = siteContent["main-content"]["product-content"];
vision.textContent = siteContent["main-content"]["vision-h4"];
visionTxt.textContent = siteContent["main-content"]["vision-content"];


//end main content

//contact section start

var contactH4 = document.querySelector('section.contact > h4');
var contactAddress = document.querySelector('section.contact > p:nth-child(2)');
var contactNumber = document.querySelector('section.contact > p:nth-child(3)');
var contactEmail = document.querySelector('section.contact > p:nth-child(4)');

contactH4.textContent = siteContent["contact"]["contact-h4"];
contactAddress.textContent = siteContent["contact"]["address"];
contactNumber.textContent = siteContent["contact"]["phone"];
contactEmail.textContent = siteContent["contact"]["email"];

//contact section end

//footer start

var footer = document.querySelector('footer > p');

footer.textContent = siteContent["footer"]["copyright"];

//end footer