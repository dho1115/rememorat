

let span = document.querySelector("span");
let count = 0;

let timer = setInterval(function() {
    count +=1;
    span.textContent = count;
},5000)

