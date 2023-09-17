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
        question: "8. How to write an IF statement for executing some code if 'i' is NOT equal to 5?",
        a: "if (i <> 5)",
        b: "if i=! 5 then",
        c: "if (i != 5)",
        d: "if i <> 5",
        correct: "c",
    },
    {
        question: "9. How does a WHILE loop start?",
        a: "while (i <= 10)",
        b: "while i = 1 to 10",
        c: "while (i <= 10; i++)",
        d: "-",
        correct: "c",
    },
    {
        question: "10. How does a FOR loop start?",
        a: "for (i = 0; i <= 5; i++)",
        b: "for (i <= 5; i++)",
        c: "for i = 1 to 5",
        d: "for (i = 0; i <= 5)",
        correct: "a",
    },
    {
        question: "11. How can you add a comment in a JavaScript?",
        a: "//This is a comment",
        b: "'This is a comment",
        c: "<!--This is a comment-->",
        d: '-',
        correct: "a",
    },
    {
        question: "12. What is the correct way to write a JavaScript array?",
        a: 'var colors = 1 = ("red), 2 = ("green"), 3 = ("blue");',
        b: 'var colors = "red", "green", "blue"',
        c: 'var colors = ["red", "green", "blue"]',
        d: 'var colors = (1:"red", 2:"green", 3:"blue")',
        correct: "c",
    },
    {
        question: "13.How do you round the number 7.25, to the nearest integer?",
        a: "rnd(7.25)",
        b: "round(7.25)",
        c: "Math-rnd(7.25)",
        d: "Math.round(7.25)",
        correct: "b",
    },
    {
        question: "14. How do you find the number with the highest value of x and y?",
        a: "Math.ceil(x,y)",
        b: "ceil(x,y)",
        c: "top(x,y)",
        d: "Math.max(x,y)",
        correct: "d",
    },
    {
        question: "15. JavaScript is the same as Java.",
        a: 'True',
        b: 'False',
        c: "-",
        d: "-",
        correct: "b",
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