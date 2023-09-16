const quizData = [
    {
        question: "1. What does HTML stands for?",
        a: "Hypertext Markdown Language",
        b: "Hyperlinks Markup Language",
        c: "Hypertext Markin Language",
        d: "Hypertext Markup Language",
        correct: "d",
    },
    {
        question: "2. Who is making the Web standards?",
        a: "Google",
        b: "Microsoft",
        c: "Mozilla",
        d: "The World Wide Consortium",
        correct: "d",
    },
    {
        question: "3. Choose the correct HTML element for the largest heading",
        a: "<heading>",
        b: "<h1>",
        c: "<head>",
        d: "<h6>",
        correct: "b",
    },
    {
        question: "4. What is the correct HTMl element for inserting a line break?",
        a: "<break>",
        b: "<br>",
        c: "<lb>",
        d: "<linebreak>",
        correct: "b",
    },
    {
        question: "5. Choose the correct HTML element to define important text",
        a: "<b>",
        b: "<strong>",
        c: "<important",
        d: "<i>",
        correct: "b",
    },

    {
        question: "6. Choose the correct HTML element to define emphasized text",
        a: "<i>",
        b: "<italic>",
        c: "<em>",
        d: "<emphasized>",
        correct: "c",
    },
    {
        question: "7. Which character is used to indicate an end tag?",
        a: "*",
        b: "/",
        c: "<>",
        d: "^",
        correct: "b",
    },
    {
        question: "8.Which of these elements are all <table> elements?",
        a: "<thead><body><tr>",
        b: "<table><head><tfoot>",
        c: "<table><tr><tt>",
        d: "<table><tr><td>",
        correct: "d",
    },
    {
        question: "9.How can you make a numbered list?",
        a: "<ol>",
        b: "<dl>",
        c: "<ul>",
        d: "<list>",
        correct: "a",
    },
    {
        question: "10. How can you make a bulleted list?",
        a: "<ol>",
        b: "<dl>",
        c: "<ul>",
        d: "<list>",
        correct: "c",
    },
    {
        question: "11. An <iframe> is used to display a web page within a web page.",
        a: "True",
        b: "False",
        c: "There is no such thing as an <iframe>",
        d: "None of the above",
        correct: "a",
    },
    {
        question: "12. HTML comments start with <!-- and end with -->",
        a: "True",
        b: "False",
        c: "//*-*//",
        d: "*/-/*",
        correct: "a",
    },
    {
        question: "13. Which HTML element defines the title of a document?",
        a: "<meta>",
        b: "<title>",
        c: "<head>",
        d: "none of the above",
        correct: "b",
    },
    {
        question: "14. Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?",
        a: "longdesc",
        b: "alt",
        c: "src",
        d: "title",
        correct: "b",
    },
    {
        question: "15. Which doctype is correct for HTML5?",
        a: "<!DOCTYPE HTML V5>",
        b: "<!DOCTYPE HTML5>",
        c: "<!DOCTYPE html>",
        d: "N one of the above",
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