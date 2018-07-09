

//Time remaining.
let span = document.querySelector("span");
//The div box surrounding the image.
let questionairre = document.querySelector(".questionairre");
//The question for the image shown.
let thequestion = document.querySelector("#question");
//The "I"mage that is inside the ".questionairre" div.
let I = document.querySelector("#I");
//The input box (along with "user guess values and class") where the user inputs the answer.
let input = document.querySelector("input");
let InputClass = document.querySelector(".input");
let guess = input.value;
//button
let button = document.querySelector("button");
//Play again
let playagain = document.querySelector(".playagain");
//This is where your result (whether you're right or wrong) is shown.
let h5 = document.querySelector("h5");
//The counter for the timer.
let count = 0;
//The next two variables will calculate and display your recallrank score.
let recallranking = 0;
let recallrank = document.querySelector("#recallrank");

let randNum = Math.floor(Math.random() * 35791579153);

let numberQuestion = {
    Image: randNum,
    Question: "What was the number on the screen?",
} 

//This function will determine whether the USER response is == CORRECT "randNum".
function IsAnswerCorrect() {
    if(Number(input.value) == randNum) {
        recallranking += 5;
        recallrank.textContent = recallranking;
    }
    return Number(input.value) == randNum ? "CORRECT!!!" : "Wrong! The answer is " + randNum;
} 

//Finally, the function below will display the result in the <h5> tag below. This is linked to the <button>Submit</button> on the html page.
function displayResult() {
    h5.textContent = IsAnswerCorrect();
    return h5.textContent;
} 

//This initializes the "questionairre" div to visibility: hidden.
questionairre.classList.add("TimeIsUp");
InputClass.classList.add("TimeIsUp");
button.classList.add("TimeIsUp");

//The function below will: (1) reveal the question. (2) reveal input class. (3) reveal button.
function RevealNumberQuestion() {
    questionairre.classList.add("TimeIsUp");
    InputClass.classList.remove("TimeIsUp");
    button.classList.remove("TimeIsUp");
}

let timer = setInterval(function NumberGuessingGame() {       
    if(count == 8) {        
        clearInterval(1); //stops the timer.
        span.textContent = "TIME IS UP!!!";
        RevealNumberQuestion();
        thequestion.textContent = numberQuestion.Question;

    } else {
        questionairre.classList.remove("TimeIsUp");
        count +=1;
        I.textContent = numberQuestion.Image;
        span.textContent = 8-count;
    }
},1000)

//Have an object. set key value pairs with one key/value being the picture on the screen and the second one being the question AFTER the picture has left. 








