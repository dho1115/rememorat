

let span = document.querySelector("span");
let questionairre = document.querySelector(".questionairre");
let thequestion = document.querySelector("#question");
let I = document.querySelector("#I");
let count = 0;
let randNum = Math.floor(Math.random() * 35791457915);

let timer = setInterval(function() {       
    if(count == 8) {        
        clearInterval(1);
        span.textContent = "TIME IS UP!!!";
        thequestion.textContent = NumberMemory("Q");
        questionairre.classList.add("TimeIsUp");
    } else {
        count +=1;
        I.textContent = NumberMemory("I");
        span.textContent = 8-count;
    }
},1000)

//Have an object. set key value pairs with one key/value being the picture on the screen and the second one being the question AFTER the picture has left. 

function NumberMemory(IorQ) {
    let obj = {};
    obj.img = randNum;
    obj.question = "What was the number on the screen?"

    if(IorQ == "I") {
        return obj.img;
    } else {
        return obj.question;
    }
} 



