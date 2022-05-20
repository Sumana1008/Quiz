const quizDB = [
    {
        question: "Q1: A group of …… is commonly called as one byte.",
            a: "Six bits",
            b: "Eight bits",
            c: "Twelve bits",
            d: "Fifteen bits",
            ans: "ans2"
    },
    {
        question: "Q2: If the operating system of a computer stop working while working on this, usually what does a user do?",
            a: "Leave it",
            b: "Restart it",
            c: "Format it",
            d: "Throw it",
            ans: "ans2"
    },
    {
        question: "Q3: The Third Generation Computer used",
            a: "Transistors",
            b: "Integrated Circuits",
            c: "Vacuum tube",
            d: "Chip",
            ans: "ans2"
    },
    {
        question: "Q4: If you need to copy the contents of MS Word, which command will you give?",
        a: "Ctrl+C",
        b: "Ctrl+V",
        c: "Ctrl+Z",
        d: "Ctrl+X",
        ans: "ans1"
    },
    {
        question: "Q5: A personal computer stores documents or other data temporarily on",
        a: "RAM",
        b: "HDD",
        c: "ROM",
        d: "Processor",
        ans: "ans3"
    }
];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');

const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer');

const showScore = document.querySelector('#showScore');

let questionCount = 0;
let score = 0;

const loadQuestion = () =>  {

    questionList = quizDB[questionCount];

    question.innerText = (questionList.question);

    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
}

loadQuestion();

getCheckAnswer = () => {
    let answer;

    answers.forEach((curAnsElem) => {
        if (curAnsElem.checked){
            answer = curAnsElem.id
        }  
    });
    return answer;
}

const deSelectAll = () => {
    answers.forEach((curAnsElem) => curAnsElem.checked = false );
}

submit.addEventListener('click', () =>
{
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);

    if (checkedAnswer == quizDB[questionCount].ans){
        score++;
    };

    questionCount++;

    deSelectAll();

    if (questionCount < quizDB.length){
        loadQuestion();
    }
    else {
        showScore.innerHTML = `
        <h3> You scored ${score}/${quizDB.length} </h3>
        <button class="btn" onclick="location.reload()"> Play again </button> `;

        showScore.classList.remove('scoreArea');
    }
});