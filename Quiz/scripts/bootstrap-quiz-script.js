const question = [
    "What is Bootstrap?",
    "Which class is used to create a button in Bootstrap?",
    "What is the default grid system in Bootstrap?",
    "Which class is used to create a responsive navigation bar in Bootstrap?",
    "How do you include Bootstrap in your project?",
    "Which class is used to create a container in Bootstrap?",
    "What is the purpose of the 'col' class in Bootstrap?",
    "Which class is used to create a dropdown menu in Bootstrap?",
    "How do you create a modal in Bootstrap?",
    "Which class is used to align text to the center in Bootstrap?"
];

const options = [
    ["A programming language", "A CSS framework", "A JavaScript library", "A database"],
    [".btn", ".button", ".btn-primary", ".btn-link"],
    ["12 columns", "10 columns", "6 columns", "8 columns"],
    [".navbar", ".nav", ".nav-bar", ".navigation"],
    ["<link rel='stylesheet' href='bootstrap.css'>", "<script src='bootstrap.js'> /script>", "<bootstrap>", "<include src='bootstrap'>"],
    [".container", ".wrapper", ".box", ".content"],
    ["To create a column", "To create a row", "To create a container", "To create a button"],
    [".dropdown", ".drop", ".menu", ".dropdown-menu"],
    ["<div class='modal'>", "<div class='modal-dialog'>", "<div class='modal-content'>", "<div class='modal'>"],
    [".text-center", ".align-center", ".center-text", ".text-middle"]
];

const actualans = [
    "A CSS framework",
    ".btn",
    "12 columns",
    ".navbar",
    "<link rel='stylesheet' href='bootstrap.css'>",
    ".container",
    "To create a column",
    ".dropdown",
    "<div class='modal'>",
    ".text-center"
];
let counter = 0;
let score = 0;

function CheckAns(v) {
    if (v === actualans[counter]) {
        score++;
    }
}

function Change(index) {
    const v = document.getElementById(index).innerText;
    CheckAns(v);

    if (counter < question.length - 1) {
        counter++;
        updateQuestion();
    } else {
        document.getElementById('card').style.display = 'none';
        document.getElementById('heading').style.display = 'none';
        document.getElementById('image').style.display = 'none';
        document.getElementById('score').style.display = 'block';
        document.getElementById('score-value').innerText = score;
        document.getElementById('total-questions-score').innerText = question.length;
    }
}

function updateQuestion() {
    document.getElementById('question-number').innerText = counter + 1;
    document.getElementById('question-text').innerText = question[counter];
    const optionsContainer = document.getElementById('option');
    optionsContainer.innerHTML = '';
    options[counter].forEach((option, index) => {
        const li = document.createElement('li');
        li.id = index;
        li.innerText = option;
        li.onclick = () => Change(index);
        optionsContainer.appendChild(li);
    });
}

// Initialize the first question
updateQuestion();
document.getElementById('total-questions').innerText = question.length;
document.getElementById('total-questions-score').innerText = question.length;