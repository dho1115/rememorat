

let span = document.querySelector("span");
let questionairre = document.querySelector(".questionairre");
let count = 0;

let timer = setInterval(function() {    
    if(count == 16) {
        clearInterval(1);
        questionairre.classList.add("TimeIsUp");
    } else {
        count +=1;
    }
    span.textContent = 16-count;
},1000)

//Have an object. set key value pairs with one key/value being the picture on the screen and the second one being the question AFTER the picture has left.
