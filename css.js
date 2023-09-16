const quizData = [
    {
        question: "1. What does CSS stands for?",
        a: "Creative Style Sheets",
        b: "Cascading Style Sheets",
        c: "Colorful Style Sheets",
        d: "Computer Style Sheets",
        correct: "b",
    },
    {
        question: "2. Where in an HTML document is the correct place to refer to an external style sheet?",
        a: "In the <head> section",
        b: "At the end of the document",
        c: "In the <body> sectiom",
        d: "TNone of the above",
        correct: "a",
    },
    {
        question: "3. Which HTML tag is used to define an internal style sheet?",
        a: "<script>",
        b: "<css>",
        c: "<style>",
        d: "<title>",
        correct: "c",
    },
    {
        question: "4.Which HTML attribute is used to define inline styles?",
        a: "font",
        b: "styles",
        c: "class",
        d: "style",
        correct: "d",
    },
    {
        question: "5.Which is the correct CSS syntax?",
        a: "{body:color=black;}",
        b: "body {color:black;}",
        c: "body:color=black;",
        d: "{body;color:black;}",
        correct: "b",
    },

    {
        question: "6. How do you insert a comment in a CSS file?",
        a: "// this is a comment //",
        b: "'this is a comment",
        c: "// this is a comment",
        d: "/* this is a comment */",
        correct: "d",
    },
    {
        question: "7.Which property is used to change the background color?",
        a: "color",
        b: "background-color",
        c: "bgcolor",
        d: "background:color",
        correct: "b",
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