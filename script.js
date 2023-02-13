
const quizData = [
    {
        question: 'INDIA\'S NATIONAL BIRD ?',
        a: 'Peacock',
        b: 'Cuckoo',
        c: 'Mynah',
        d: 'Sparrow',
        correct: 'a'
    }, {
        question: 'INDIA\'S NATIONAL ANIMAL ?',
        a: 'Elephant',
        b: 'Lion',
        c: 'Tiger',
        d: 'Rhino',
        correct: 'c'
    }, {
        question: 'INDIA\'S FIRST PRESIDENT ?',
        a: 'Dr. Rajendra Prasad',
        b: 'Jawahar Lal Nehru',
        c: 'Lal Bahadur Shashtri',
        d: 'APJ Abdul Kalam',
        correct: 'a'
    }, {
        question: 'INDIA\'S FIRST PRIME MINISTER ?',
        a: 'Gulzarilal Nanda',
        b: 'Jawahar Lal Nehru',
        c: 'Atal Bihari Vajpaye',
        d: 'Ram Nath Kovind',
        correct: 'b'
    }, {
        question: 'INDIA\'S LONGEST DAM ?',
        a: 'Tehri Dam',
        b: 'Bhakra Dam',
        c: 'NagarjunaSagar Dam',
        d: 'Hirakund Dam',
        correct: 'd'
    }
];

const answerEls = document.querySelectorAll(".answer");
const quiz = document.getElementById("quiz");
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById("submit")


let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerHTML = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

}

function getSelected() {

    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}

function deselectAnswers() {

    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });

}

submitBtn.addEventListener("click", () => {

    const answer = getSelected();

    if (answer) {

        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        }
        else {
            quiz.innerHTML = `<h2>You answered correctly at ${score}/${quizData.length} questions.</h2> <button onclick = "location.reload()"> Reload </button>`;
        }


    }


});