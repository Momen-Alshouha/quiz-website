
var arrSymbols = [];



const quizData = [
    {
        question: "Q1: Find the answer that best completes the analogy! Book is to Reading as Fork is to ---- ? ",

        a: "Drawing",
        b: "Writing",
        c: "Driving",
        d: "Eeating",
        correct: "d",
    },
    {
        question: "Q2: Which of the following can be arranged into a 5-letter English word ?",
        a: "H R G S T",
        b: "R I L S A",
        c: "T O O M T",
        d: "W Q R G S",
        correct: "b",
    },
    {
        question: "Q3: Which number should come next in the pattern?..'37, 34, 31, 28'",
        a: "25",
        b: "24",
        c: "30",
        d: "39",
        correct: "a",
    },
    { 
        question: "Q4: Which number logically follows this series?...'4, 6, 9, 6, 14, 6'",
        a: "6",
        b: "17",
        c: "19",
        d: "21",
        correct: "c",
    },
    {
        question: "Q5: Which of the meanings is the best fitting for the specified word?...'injustice'",
        a: "complaint",
        b: "futile",
        c: "sin",
        d: "discord",
        correct: "a",
    }
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('next')

let CounterQuestions = 0
let scoreIQ = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[CounterQuestions]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}
function getSelected() {
    let answer

    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer
}

submitBtn.addEventListener('click', () => {

    const answer = getSelected()

    if (answer) {
        if (answer === quizData[CounterQuestions].correct) {
            scoreIQ++

            arrSymbols.push(answer)

        }
        else {
            
            if (getSelected())
                arrSymbols.push(answer)
            console.log(arrSymbols)

        }
        localStorage.setItem("compare", arrSymbols)

        CounterQuestions++

        if (CounterQuestions < quizData.length) {
            loadQuiz()
        }
        else {


            localStorage.setItem("scoreIQ", scoreIQ);
            if(scoreIQ>2)
           { 
               
            quiz.innerHTML = `
            <h1  style="color: DarkBlue ;text-align:center">You Completed The IQ Exam </h1>

           
            <br> <br>
            <button><a style="text-decoration:none;color:white" href="../html/English_exam.html">Go to English Exam</a></button>
        `
        }
           else{
               quiz.style.backgroundColor='white';
               quiz.innerHTML = `
               <h1  style="color: DarkBlue ;text-align:center">You Completed The IQ Exam </h1>
              
               <br> <br>
               <button><a style="text-decoration:none;color:white" href="../html/English_exam.html">Go to English Exam</a></button>
            `
            }
           
        }
    }
});
