var aa = [];
var arrSymbols = [];
var allScores=[];


const quizData = [
    {
        question: "Q1: I drive my kids to soccer practice ____2:30 -____ Thursdays",
        
        a: "in / in",
        b: "on / on",
        c: "at / in",
        d: "at / on",
        correct: "d",
    },
    {
        question: "Q2: He isn’t eating with us tonight,____?",
        a: "hasn’t he?",
        b: "does he?",
        c: "isn’t he?",
        d: "is he?",
        correct: "d",
    },
    {
        question: "Q3: In my opinion, going to the beach ____ hiking in the mountains.",
        a: "more exciting",
        b: "more exciting than",
        c: "excitinger than",
        d: "excitinger",
        correct: "a",
    },
    {
        question: "Q4: My sister just____ from college last month.",
        a: "graduating",
        b: "is graduating",
        c: "graduated",
        d: "graduates",
        correct: "c",
    },
    {
        question: "Q5: . Sometime in the future, most cars ____ electricity to help save gasoline.",
        a: "will be using",
        b: "would have used",
        c: "will using",
        d: "discord ",
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
let scoreEN = 0

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
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()

    if (answer) {
        if (answer === quizData[CounterQuestions].correct) {
            scoreEN++

            arrSymbols.push(answer)

        }
        else {
            //aa.push(CounterQuestions);
            localStorage.setItem('arr', aa)
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

            localStorage.setItem("scoreEN", scoreEN);
            if(scoreEN>2)
           { 
               
           
            quiz.innerHTML = `
            <h1  style="color: DarkBlue ;text-align:center">You Completed The English Exam </h1>
               <h2 style="color: DarkBlue"> Your Score Is ${scoreEN} Out Of 5 </h2>
            <a style="text-decoration:none;color:white" href="../html/EnglishResult.html"><button  margin-top:0px" >Show Answers</button></a>
            <br> <br>
            <button  margin-top:0px" ><a style="text-decoration:none;color:white" href="../html/Technical_exam.html">Go to Technical Exam</a></button>
            
        `
        
        
        }
           else{
               
               quiz.innerHTML = `
               <h1  style="color: DarkBlue ;text-align:center">You Completed The English Exam </h1>
               <h2 style="color: DarkBlue"> Your Score Is ${scoreEN} Out Of 5 </h2>
               <a style="text-decoration:none;color:white" href="../html/EnglishResult.html"><button  margin-top:0px" >Show Answers</button></a>
               <br> <br>
               <button  margin-top:0px" ><a style="text-decoration:none;color:white" href="../html/Technical_exam.html">Go to Technical Exam</a></button>
            `
            }
           
        }
    }
});