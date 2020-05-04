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


//end navigation

//cta start
var ctah1 = document.querySelector('section.cta > div')

ctah1.textContent = siteContent["cta"]["h1"]

//end cta

//main content start

var feature = document.querySelector('div.top-content > div:nth-child(1) > h4')
var about = document.querySelector('div.top-content > div:nth-child(2) > h4')
var service = document.querySelector('div.bottom-content > div:nth-child(1) > h4')
var product = document.querySelector('div.bottom-content > div:nth-child(2) > h4')
var vision = document.querySelector('div.bottom-content > div:nth-child(3) > h4')

feature.textContent = siteContent["main-content"]["features-h4"];
about.textContent = siteContent["main-content"]["about-h4"];
service.textContent = siteContent["main-content"]["services-h4"];
product.textContent = siteContent["main-content"]["product-h4"];
vision.textContent = siteContent["main-content"]["vision-h4"];


//end main content

//footer start

//end footer