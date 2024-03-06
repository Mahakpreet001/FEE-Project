const questions= [
    {
        question:"What is the full form for CSS?",
        answers: [
            { text: "Cascading Sheet Style", correct: false},
            { text: "Cascading Style Sheets", correct: true},
            { text: "Color Style Sheets", correct: false},
            { text: "Codding Sheet System", correct: false},
        ]
    },
    {
        question:"HTML files are saved by default with the extension?",
        answers: [
            { text: ".html", correct: true},
            { text: ".ht", correct: false},
            { text: ".ml", correct: false},
            { text: "hml", correct: false},
        ] 
    },
    {
        question:"Javascript is an _______ language?",
        answers: [
            { text: "Object-Based", correct: false},
            { text: "Procedual", correct: false},
            { text: "Object-Oriented", correct: true},
            { text: "None of these", correct: false},
        ] 
    },
    {
        question:"How can we write comments in CSS?",
        answers: [
            { text: "/* */", correct: true},
            { text: "//", correct: false},
            { text: "#", correct: false},
            { text: "All of the above", correct: false},
        ] 
    },
    {
        question:"How can we specify the spacing between each letter in a text in CSS?",
        answers: [
            { text: "alpha-spacing", correct: false},
            { text: "letter-spacing", correct: true},
            { text: "character-spacing", correct: false},
            { text: "None of the above", correct: false},
        ] 
    },
    {
        question:"Javascript files are saved by default with the extension?",
        answers: [
            { text: ".java", correct: false},
            { text: ".script", correct: false},
            { text: ".ja", correct: false},
            { text: ".js", correct: true},
        ] 
    },
    {
        question:"What tag is used to render an image on a webpage?",
        answers: [
            { text: "img", correct: true},
            { text: "src", correct: false},
            { text: "image", correct: false},
            { text: "None of these", correct: false},
        ] 
    },

];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-button");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML ="Next";
    showQuestion();
} 
function showQuestion(){
    resetState();
    let currentQuestion = questions [currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement. innerHTML = questionNo+ ". "+ currentQuestion.question; 

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button); 
        if (answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener ("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }

}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array. from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You Scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Start Again"
    nextButton.style.display="block"
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click",()=>{
    if (currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})

startQuiz();