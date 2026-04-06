// RUN CODE IN CONSOLE 
// SEE all events 
console.log(monitorEvents(document));

// RUN CODE IN CONSOLE 
// not SEE events 
console.log(unmonitorEvents(document));



//addEventListener
let btn = document.createElement('button');
btn.id = 'btn';
btn.innerText = 'Click Me';
document.body.appendChild(btn);

// Use the same btn variable (no redeclaration)
function random(number){
    return Math.floor(Math.random() * (number + 1));
}

btn.addEventListener('click', () => {
    let red = random(255);
    let green = random(255);
    let blue = random(255);

    document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
});



//removeEventListener
let btn = document.createElement('button');
btn.id = 'btn';
btn.innerText = 'Click change colour';
document.body.appendChild(btn);

function random(number){
    return Math.floor(Math.random() * (number + 1));
}
// named function
function changeColor() {
    let red = random(255);
    let green = random(255);
    let blue = random(255);

    document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}
// add listener
btn.addEventListener('click', changeColor);
// remove listener (example: after 5 seconds)
setTimeout(() => {
    btn.removeEventListener('click', changeColor);
    console.log("Event listener removed");
}, 5000);



//dispatchEvent.js
let event = new Event("hello",{bubbles:true});
addEventListener("hello",function(){
    alert("Custom Event Dispatched");
});
document.dispatchEvent(event);


//bubblingPhase.js
let head = document.querySelector('#head');
head.addEventListener('click',function(event){
    alert("target = " + event.target.tagName + ", this=" + this.tagName);
});

head.parentNode.addEventListener('click',function(event){
    alert("target = " + event.target.tagName + ", this=" + this.tagName);
    head.parentNode.parentNode.style.backgroundColor = 'aliceblue';
});

head.parentNode.parentNode.addEventListener('click',function(event){
    alert("target = " + event.target.tagName + ", this=" + this.tagName);
});
// Sequence - span , h1 , div 
