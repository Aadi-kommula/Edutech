const question = [
    "What is JavaScript?",
    "Which of the following is not a JavaScript data type?",
    "How do you declare a variable in JavaScript?",
    "Which operator is used to assign a value to a variable?",
    "What is the correct syntax for referring to an external script called 'script.js'?",
    "How do you write a comment in JavaScript?",
    "Which function is used to parse a string to an integer?",
    "What is the output of '2' + '2' in JavaScript?",
    "Which event occurs when the user clicks on an HTML element?",
    "How do you create a function in JavaScript?"
];

const options = [
    ["A markup language", "A scripting language", "A styling language", "A database language"],
    ["String", "Number", "Boolean", "Float"],
    ["var x;", "variable x;", "v x;", "declare x;"],
    ["=", "==", "===", "=>"],
    ["<script href='script.js'>", "<script name='script.js'>", "<script src='script.js'>", "<script file='script.js'>"],
    ["<!-- comment -->", "// comment", "/* comment */", "# comment"],
    ["parseInt()", "parseFloat()", "number()", "int()"],
    ["4", "22", "NaN", "Error"],
    ["onchange", "onclick", "onmouseover", "onload"],
    ["function:myFunction()", "function myFunction()", "function = myFunction()", "function => myFunction()"]
];

const actualans = [
    "A scripting language",
    "Float",
    "var x;",
    "=",
    "<script src='script.js'>",
    "// comment",
    "parseInt()",
    "22",
    "onclick",
    "function myFunction()"
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