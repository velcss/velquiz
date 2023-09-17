const quizData = [
    {
        question: "1. Inside which HTML element do we put the JavaScript?",
        a: "<js>",
        b: "<script>",
        c: "<javascript>",
        d: "<scripting>",
        correct: "b",
    },
    {
        question: "2. Where is the correct place to insert a JavaScript?",
        a: "The <head> section",
        b: "Both the <head> section and the <body> section are correct",
        c: "The <body> section",
        d: "The <header> section",
        correct: "b",
    },
    {
        question: "3. What is the correct syntax for referring to an external script called 'xxx.js'?",
        a: '<script href="xxx.js">',
        b: '<script name="xxx.js">',
        c: '<script src="xxx.js">',
        d: '<script url="xxx.js">',
        correct: "c",
    },
    {
        question: '4. How do you write "Hello World" in an alert box?',
        a: 'msg("Hello World");',
        b: 'msgBox("Hello World");',
        c: 'alerBox("Hello World");',  
        d: 'alert("Hello World");',
        correct: "d",
    },
    {
        question: "5. How do you create a function in JavaScript?",
        a: "function = myFunction()",
        b: "function:myFunction()",
        c: "function myFunction()",
        d: "-",
        correct: "c",
    },

    {
        question: "6. How do you call a function named 'myFunction'?",
        a: "call function myFunction()",
        b: "call myFunction()",
        c: "myFunction()",
        d: "-",
        correct: "c",
    },
    {
        question: "7. How to write an IF statement in JavaScript?",
        a: "if (i = = 5)",
        b: "if i = 5 then",
        c: "if i = = 5 then",
        d: "if i = 5",
        correct: "a",
    },
    {
        question: "8. How do you add a background color for all <h1> elements?",
        a: "h1 {background-color:#FFFFFF;}",
        b: "all.h1 {background-color:#FFFFFF;}",
        c: "h1.all {background-color:#FFFFFF;}",
        d: "h1-all {background-color:#FFFFFF;}",
        correct: "a",
    },
    {
        question: "9.Which CSS property is used to change the text color of an element?",
        a: "color",
        b: "fgcolor",
        c: "text-color",
        d: "color-text",
        correct: "a",
    },
    {
        question: "10.Which CSS property controls the text size?",
        a: "font-style",
        b: "text-style",
        c: "font-size",
        d: "text-size",
        correct: "c",
    },
    {
        question: "11.What is the correct CSS syntax for making all the <p> elements bold?",
        a: "p {font-weight:bold;}",
        b: '<p style="text-size:bold;">',
        c: "p {text-size:bold;}",
        d: '<p style="font-size:bold;"',
        correct: "a",
    },
    {
        question: "12. How do you display hyperlinks without an underline?",
        a: "a {text-decoration:no_underline;}",
        b: "a {underline:none;}",
        c: "a {text-decoration:none;}",
        d: "a {decoration:no-underline;}",
        correct: "c",
    },
    {
        question: "13.How do you make each word in a text start with a capital letter?",
        a: "text-transform:capitalize",
        b: "text-style:capitalize",
        c: "transform:capitalize",
        d: "You can't do that with css",
        correct: "a",
    },
    {
        question: "14. Which property is used to change the font of an element?",
        a: "font-family",
        b: "font-style",
        c: "font-weight",
        d: "font-element",
        correct: "a",
    },
    {
        question: "15.How do you make the text bold?",
        a: "font:bold;",
        b: "style:bold;",
        c: "font-weight:bold;",
        d: "text:bold;",
        correct: "c",
    },
];
const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')
let currentQuiz = 0
let score = 0
loadQuiz()
function loadQuiz() {
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]
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
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }
       currentQuiz++
       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>
           <div class="submit">
           <a href="index.html"><button>RESTART</button>
           </div>
           `
       }
    }
})