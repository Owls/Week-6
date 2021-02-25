/**
 * Here, we are creating a variable, and using the getElementsByTagName Method to target our h1.
 */

var heading = document.getElementsByTagName("h1");
console.log(heading);

//! Method I: querySelector
//Because the h1 tag we're targeting is the first h1 in the document, and seemingly the only one, 
//we can use querySelector. 
document.querySelector("h1").innterHTML = "Generic Heading"
console.log(heading);

//! Method II: getElementsByTagName 
//Here, we use the method getElementsByTagName, and point to the first index. 
document.getElementsByTagName("h1")[0].innerHTML = "Generic Heading"
console.log(heading);

//! 
var paragraph = document.getElementsByTagName("p");
console.log(paragraph);

//! Class List Conditional
var paragraphs = document.getElementsByTagName("p");

for(let i = 0; i < paragraphs.length; i++)
{
    paragraphs[i].classList.add("blue");
}

console.log(paragraphs);

//! Append Child 
var newpar = document.querySelector("div");
var anotherp = document.createElement("p");
var newpartext = document.createTextNode("New Paragraph!");

anotherp.appendChild(newpartext);
newpar.appendChild(anotherp);

//!
let coolstuff = ['Music', 'Vidya', 'Books', 'Oranges'];

let ul = document.querySelector("ul");

for(let i = 0; i < coolstuff.length; i++)
{
    let hobby = coolstuff[i];

    let li = document.createElement("li");
    li.appendChild(document.createTextNode(hobby));
    ul.appendChild(li);
}

//!
let form = document.querySelector("form");

form.addEventListener('click', function (e){
    e.preventDefault();

    if(e.target.id === "go")
    {
        console.log('Bang!');
        e.target.classList.add("go");
    }
    else if(e.target.id === "stop")
    {
        console.log('Bong!');
        e.target.classList.add("stop");
    }
});