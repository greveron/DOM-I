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

//let nav = document.getElementsByClassName("container");
///nav.setAttribute(siteContent["nav"])



console.log("hello");
let ctaimg = document.getElementById("cta-img");
ctaimg.setAttribute('src', siteContent["cta"]["img-src"])





let topcontent = document.querySelectorAll(".top-content .text-content");
let bottomcontent = document.querySelectorAll(".bottom-content .text-content");
console.log(topcontent);

let cta = document.querySelectorAll(".cta .cta-text");

let dom = cta[0].querySelector('h1')
dom.textContent =siteContent['cta']['h1'];

let get = cta[0].querySelector('button')
get.textContent =siteContent['cta']['button'];

let featuresh4 = topcontent[0].querySelector('h4')
featuresh4.textContent = siteContent['main-content']['features-h4'];
console.log(siteContent['main-content']['features-h4'])
let featuresp = topcontent[0].querySelector('p')
featuresp.textContent = siteContent['main-content']['features-content'];


let abouth4 = topcontent[1].querySelector('h4')
abouth4.textContent = siteContent['main-content']['about-h4'];
let aboutp = topcontent[1].querySelector('p')
aboutp.textContent = siteContent['main-content']['about-content'];

let main = document.getElementById("middle-img");
main.setAttribute('src',siteContent["main-content"]["middle-img-src"] );


let servicesh4 = bottomcontent[0].querySelector('h4')
servicesh4.textContent = siteContent['main-content']['services-h4'];
let servicesp = bottomcontent[0].querySelector('p')
servicesp.textContent = siteContent['main-content']['services-content'];

let producth4 = bottomcontent[1].querySelector('h4')
producth4.textContent = siteContent['main-content']['product-h4'];
let productp = bottomcontent[1].querySelector('p')
productp.textContent = siteContent['main-content']['product-content'];

let visionh4 = bottomcontent[2].querySelector('h4')
visionh4.textContent = siteContent['main-content']['vision-h4'];
let visionp = bottomcontent[2].querySelector('p')
visionp.textContent = siteContent['main-content']['vision-content'];


let contact = document.querySelector(".contact h4");


contact.textContent = siteContent["contact"]["contact-h4"];
let contactP = document.querySelectorAll(".contact p");




contactP[0].textContent = siteContent["contact"]["address"];
contactP[1].textContent = siteContent["contact"]["phone"];
contactP[2].textContent = siteContent["contact"]["email"];



let container = document.querySelectorAll("nav a");

container[0].textContent = siteContent["nav"]["nav-item-1"];
container[1].textContent = siteContent["nav"]["nav-item-2"];
container[2].textContent = siteContent["nav"]["nav-item-3"];
container[3].textContent = siteContent["nav"]["nav-item-4"];
container[4].textContent = siteContent["nav"]["nav-item-5"];
container[5].textContent = siteContent["nav"]["nav-item-6"];


let footer = document.querySelector("footer");
footer.textContent=siteContent["footer"]["copyright"];



