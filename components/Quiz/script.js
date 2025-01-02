const question = [
    "What is React?",
    "Which command is used to create a new React application?",
    "What is the correct syntax to create a functional component in React?",
    "What is the purpose of the useState hook in React?",
    "Which file contains the root component in a default React application?",
    "What does JSX stand for?",
    "How do you pass data to a component in React?",
    "Which method is used to update the state in a class component?",
    "What is the virtual DOM in React?",
    "What is the purpose of the useEffect hook in React?"
];

const options = [
    ["A library for building UI", "A database", "A server-side framework", "A CSS framework"],
    ["npm create-react-app", "npm new react-app", "npx create-react-app", "react new app"],
    ["function Component() {}", "Component() => {}", "React.component()", "function() => {}"],
    ["To fetch data", "To manage side effects", "To manage state in functional components", "To manage routes"],
    ["App.js", "index.js", "root.js", "main.js"],
    ["JavaScript Syntax", "JavaScript XML", "Java Syntax Extension", "JavaScript Extensions"],
    ["Using props", "Using states", "Using hooks", "Using events"],
    ["setState()", "updateState()", "changeState()", "modifyState()"],
    ["A copy of the real DOM", "An optimized version of the DOM", "A new HTML file", "A React component"],
    ["To handle state", "To manage side effects", "To render UI", "To update the DOM"]
];

const actualans = [
    "A library for building UI",
    "npx create-react-app",
    "function Component() {}",
    "To manage state in functional components",
    "index.js",
    "JavaScript XML",
    "Using props",
    "setState()",
    "A copy of the real DOM",
    "To manage side effects"
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