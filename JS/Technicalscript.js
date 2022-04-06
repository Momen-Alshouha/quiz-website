var aa = [];
var arrSymbols = [];
var finalGrade;
var x;

const quizData = [
    {
        question: "Q1: What does HTML stand for?",
        
        a:"Hyperlinks and Text Markup Language",
        b:"Home Tool Markup Language",
        c:"Hyper Text Markup Language",
        d:"Hyper Text Markup List",
        correct: "c",
    },
    {
        question: "Q2: Choose the correct HTML element for the largest heading:",
        a: "<head>",
        b: "<heading>",
        c: "<h6>",
        d: "<h1>",
        correct: "d",
    },
    {
        question: "Q3: A page designed in HTML is called",
        a:"Application",
        b:"Cover page",
        c:"Front-end",
        d:"Web Page",
        correct: "d",
    },
    {
        question: "Q4: If we want to place text around an image, which CSS property should we use?",
        a:"push",
        b:"float",
        c:"align",
        d:"wrap",
        correct: "b",
    },
    {
        question: "Q5: Can we align an element by setting margin-left and margin-right?",
        a:"Yes,it’s possible",
        b:"No,it’s not possible",
        c:"Sometimes yes",
        d:"none of the bove ",
        correct: "a",
    },
    {
        question: "Q6: Which statement cannot be used to declare a variable in JavaScript?",
        a:"Let",
        b:" Var",
        c:"Int",
        d:"Const ",
        correct: "c",
    },
    {
        question: "Q7: What are block scoped variables in JavaScript?",
        a:"The variables cannot be accessed outside the function ",
        b:"The variables can be used globally",
        c:"The variables can be used globally",
        d:"The variable is only accessible inside the block(if-else/for block)  ",
        correct: "d",
    },
    
    {
        question: "Q8: The variable is only accessible inside the block(if-else/for block) inside which it is declared ",
        a:"Functions are basically a statement which returns a constant ",
        b:"Functions are basically a set of statements that perform task",
        c:"Functions are one of the data types in JavaScript",
        d:"All of these ",
        correct: "b",
    },
    {
        question: "Q9: Functions are basically a set of statements that perform some task",
        a:"Data Object Model ",
        b:"Document or Model",
        c:"Document Object Model",
        d:"Document Object Meduim",
        correct: "c",
    },
    {
        question: "Q10: Which method is used to convert the JSON string to a JSON object?",
        a:"JSON.parse(string)",
        b:"JSON.convertToObject(string)",
        c:"JSON.object(string)",
        d:"None of these",
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
let scoreTECH = 0

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
            scoreTECH++

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

            localStorage.setItem("scoreTECH", scoreTECH);
             finalGrade=parseInt( localStorage.getItem("scoreTECH"))+parseInt( localStorage.getItem("scoreIQ"))+parseInt( localStorage.getItem("scoreEN"));
if (finalGrade<10)
{
     x= "...Unfortunately, You Did Not Fulfill Our Requirements, Good Luck! "
}
else
 { 
     x="...Congratulation, We Will Arrange With You The Second Interview!"
}
            if(finalGrade>9)
           { 
               
            quiz.innerHTML = `

            <h2>you completed technical exam</h2>
            <h2> Your Score Is ${scoreTECH} Out Of 10 </h2>

            <a style="text-decoration:none;color:white" href="../html/IQresultt.html"><button  margin-top:0px" >Show  answers</button></a>
            <br> <br>


            <h2 style="text-align:center ;color: #288f28 ;border-radius: 25px;margin-top:30px; padding:30px height:100px ;width:"320px">Your final Score is ${finalGrade+x} <br> </h2>

            
        `
        //<h1  style="color: DarkBlue ;text-align:center">You Completed The IQ Exam </h1>
        //<h2 style="color: DarkBlue"> Your Score Is ${scoreIQ} Out Of 5 </h2>
        // <button><a style="text-decoration:none;color:white" href="../html/welcome.html">Go to exams page</a></button><br><br>
        
        }
           else{     quiz.innerHTML = ` 
           <h3  style="color: DarkBlue ;text-align:center;margin-top:15px">You Completed  The Technical Exam</h3>
           <h4  style="color: DarkBlue ;text-align:center; margin:30px"> Your Score Is ${scoreTECH} Out Of 10 </h4>
           
           <a style="text-decoration:none;color:white" href="../html/TechResult.html"><button  margin-top:0px" >Show answers</button></a>
           <br> <br>

           <h2 style="text-align:center ;color: #b22222 ;border-radius: 25px;margin-top:30px; padding:30px height:100px ;width:"320px">Your Final Score is ${finalGrade+x} <br> </h2>

           
           `  }
              
           
        }
    }
});

