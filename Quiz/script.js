const question = [
    "What does HTML stand for?",
    "Which tag is used to create a hyperlink in HTML?",
    "What is the correct HTML element for the largest heading?",
    "Which HTML tag is used to define an internal style sheet?",
    "What is the purpose of the <img> tag in HTML?",
    "Which attribute is used to provide a unique identifier for an HTML element?",
    "What is the correct HTML for adding a background color?",
    "Which HTML element is used to define a table row?",
    "What is the purpose of the <form> tag in HTML?",
    "Which HTML tag is used to define a list item?"
];

const options = [
    ["Hyper Text Markup Language", "Hyperlinks and Text Markup Language", "Home Tool Markup Language", "Hyper Tool Markup Language"],
    ["<link>", "<a>", "<href>", "<hyperlink>"],
    ["<h1>", "<heading>", "<h6>", "<head>"],
    ["<css>", "<style>", "<script>", "<link>"],
    ["To display an image", "To create a hyperlink", "To add a video", "To define a paragraph"],
    ["class", "id", "name", "style"],
    ["<body bg='yellow'>", "<background>yellow</background>", "<body style='background-color:yellow;'>", "<body color='yellow'>"],
    ["<tr>", "<td>", "<th>", "<table>"],
    ["To create a table", "To define a form for user input", "To display an image", "To create a list"],
    ["<li>", "<ul>", "<ol>", "<list>"]
];

const actualans = [
    "Hyper Text Markup Language",
    "<a>",
    "<h1>",
    "<style>",
    "To display an image",
    "id",
    "<body style='background-color:yellow;'>",
    "<tr>",
    "To define a form for user input",
    "<li>"
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