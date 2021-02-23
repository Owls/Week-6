var navbar = document.getElementById("navbar");
console.log(navbar);

var showcase = document.getElementById("showcase");
console.log(showcase);

var footer = document.getElementById("footer");
console.log(footer);

var footerNodes = document.querySelectorAll("#footer");
console.log(footerNodes);

var footerChildren = footer.getElementsByTagName("p");
console.log(footerChildren); 

var navLinks = document.getElementsByClassName("nav-link");
console.log(navLinks);

var ul = document.querySelector("ul");
console.log(ul);

var li = ul.children[1];
// console.log(li);

var aboutLi = Array.from(ul.children);
var lee = aboutLi[1];
console.log(lee);
