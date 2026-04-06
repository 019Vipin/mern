// ===================== WINDOW OBJECT =====================

// Global object in browser
window.console.log("Window Object");

// Same as above
console.log("Hello");

// Alert (browser only)
// alert("Hello");



// ===================== DOM BASICS =====================

// Full HTML document
console.log(document);

// Only body
console.log(document.body);



// ===================== SELECTING ELEMENTS =====================

// 🔹 By ID (single element)
let elById = document.getElementById("java");
console.log(elById);


// 🔹 By Class (multiple elements)
let elByClass = document.getElementsByClassName("nextSlide");
console.log(elByClass);


// 🔹 By Tag Name (multiple elements)
let elByTag = document.getElementsByTagName("ul");
console.log(elByTag);


// 🔹 Using querySelector (first match)
let classItem = document.querySelector(".nextSlide");
let idItem = document.querySelector("#java");
let tagItem = document.querySelector("li");


// 🔹 Using querySelectorAll (all matches)
let classItems = document.querySelectorAll(".nextSlide");
let idItems = document.querySelectorAll("#java");
let tagItems = document.querySelectorAll("li");



// ===================== DEVTOOLS SHORTCUT =====================

// Last selected element
let item = $0;
console.log(item);



// ===================== HTML CONTENT =====================

let list = document.querySelector("#list");

// Inner HTML
console.log(list.innerHTML);

// Outer HTML
console.log(list.outerHTML);

// Visible text only
console.log(list.innerText);

// All text (including hidden)
console.log(list.textContent);



// ===================== CREATE & ADD ELEMENT =====================

// Create element
let newElement = document.createElement("h1");

// Create text
let content = document.createTextNode("This is Heading");

// Attach text
newElement.appendChild(content);

// Append to parent
let parent = document.querySelector("#list");
parent.appendChild(newElement);



// ===================== INSERT METHODS =====================

// Insert element
let child1 = document.createElement("li");
child1.appendChild(document.createTextNode("Before End"));
parent.insertAdjacentElement("beforeend", child1);

// Insert HTML
parent.insertAdjacentHTML("beforebegin", "<li>Before Begin</li>");



// ===================== REMOVE ELEMENT =====================

let removeEl = document.querySelector("#thnku");
removeEl.remove();



// ===================== STYLE =====================

let styleEl = document.getElementById("thnku");

// Single style
styleEl.style.color = "#f04208";
styleEl.style.backgroundColor = "#205060";

// Multiple styles
styleEl.style.cssText += "color:red; background-color:yellow; border:2px solid black;";



// ===================== ATTRIBUTES =====================

styleEl.setAttribute("style", "color:red");



// ===================== CLASS HANDLING =====================

// className
console.log(styleEl.className);
styleEl.className += " superHead";

// classList
console.log(styleEl.classList);

styleEl.classList.add("superHead");
styleEl.classList.remove("superHead");
styleEl.classList.toggle("superHead");

console.log(styleEl.classList.contains("superHead"));



// ===================== PARENT =====================

let item2 = document.querySelector("#item2");

console.log(item2.parentNode);
console.log(item2.parentElement);