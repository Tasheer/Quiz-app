const quizData = [
    {
        question : "What is my name?",
        a : "Tasheer",
        b : "Zayn",
        c : "Gaifi",
        d : "Tobi",
        correct : "a"
    },
    {
        question : "What is my age?",
        a : 14,
        b : 12,
        c : 19,
        d : 20,
        correct : 'c'
    },
    {
        question : "Where do I live?",
        a : "Delhi",
        b : "Faridabad",
        c : "Gurgaon",
        d : "Noida",
        correct : 'b'
    },
    {
        question : "Whom I don't know?",
        a : "Arpit",
        b : "Bharat",
        c : "Tanay",
        d : "None of the above",
        correct : 'd'

    }
    
]

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer")
const someQuestion = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const subBtn = document.getElementById("submit");

let currentQuestion = 0;
let score = 0;

loadquiz();

function loadquiz() {
   
    deselectAnswers();
    const currentQuiz = quizData[currentQuestion]

    someQuestion.innerText = currentQuiz.question
    a_text.innerText = currentQuiz.a
    b_text.innerText = currentQuiz.b
    c_text.innerText = currentQuiz.c
    d_text.innerText = currentQuiz.d
}
function getSelected() {
    
    
    // why did we add this
    let answer = undefined;

    
    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id
        }
    });
    return answer;
}
function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

    // what does this do
    subBtn.addEventListener("click",() => {
        
        const answer = getSelected()

        // if we have an answer then we want the next question to appear
        if (answer) {
            if(answer === quizData[currentQuestion].correct) {
                score++
            }
        currentQuestion++;

        if (currentQuestion < quizData.length) {
            loadquiz();
        }
        else{
            // to add a pop up we use the following command
            // alert("You completed the quiz")
            quiz.innerHTML = `<h3>
            you answered correctly at ${score}/${quizData.length} questions.
            <h3/>`
        }
    }

});


