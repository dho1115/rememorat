

//Time remaining.
let span = document.querySelector("span");
//The div box surrounding the image.
let questionairre = document.querySelector(".questionairre");
//The question for the image shown.
let thequestion = document.querySelector("#question");
//The "I"mage that is inside the ".questionairre" div.
let I = document.querySelector("#I");
//The input box where the user inputs the answer.
let input = document.querySelector("input");
let guess = input.value;
//The counter for the timer.
let count = 0;
let randNum = Math.floor(Math.random() * 35791457915);

questionairre.classList.add("TimeIsUp");

let timer = setInterval(function() {       
    if(count == 8) {        
        clearInterval(1);
        span.textContent = "TIME IS UP!!!";
        thequestion.textContent = numberQuestion.Question;
        questionairre.classList.add("TimeIsUp");
    } else {
        questionairre.classList.remove("TimeIsUp");
        count +=1;
        I.textContent = numberQuestion.Image;
        span.textContent = 8-count;
    }
},1000)

//Have an object. set key value pairs with one key/value being the picture on the screen and the second one being the question AFTER the picture has left. 

let numberQuestion = {
    Image: randNum,
    Question: "What was the number on the screen?"
} 






