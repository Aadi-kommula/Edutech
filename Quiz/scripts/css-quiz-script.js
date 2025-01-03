const question = [
    "What does CSS stand for?",
    "Which property is used to change the background color of an element?",
    "What is the correct syntax for referring to an external CSS file?",
    "Which CSS property is used to control the text size?",
    "How do you make each word in a text start with a capital letter?",
    "Which property is used to change the font of an element?",
    "How do you select an element with id 'demo' in CSS?",
    "Which property is used to create space between the content and the border of an element?",
    "How do you make a list that lists its items with squares?",
    "Which property is used to change the left margin of an element?"
];

const options = [
    ["Computer Style Sheets", "Colorful Style Sheets", "Cascading Style Sheets", "Creative Style Sheets"],
    ["background-color", "color", "bgcolor", "background"],
    ["<style src='style.css'>", "<link rel='stylesheet' type='text/css' href='style.css'>", "<stylesheet>style.css</stylesheet>", "<css>style.css</css>"],
    ["text-size", "font-size", "text-style", "font-style"],
    ["text-transform: capitalize", "text-transform: uppercase", "text-transform: lowercase", "text-transform: none"],
    ["font-family", "font-style", "font-weight", "font-size"],
    ["#demo", ".demo", "demo", "*demo"],
    ["margin", "padding", "border", "spacing"],
    ["list-style-type: square", "list-type: square", "list-style: square", "list: square"],
    ["margin-left", "padding-left", "indent", "left-margin"]
];

const actualans = [
    "Cascading Style Sheets",
    "background-color",
    "<link rel='stylesheet' type='text/css' href='style.css'>",
    "font-size",
    "text-transform: capitalize",
    "font-family",
    "#demo",
    "padding",
    "list-style-type: square",
    "margin-left"
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