const question = [
    "What is ReactJS?",
    "Which of the following is used to manage state in a React component?",
    "What is the correct syntax for creating a functional component in React?",
    "Which method is used to render a React component to the DOM?",
    "What is the purpose of the 'props' object in React?",
    "How do you pass data from a parent component to a child component in React?",
    "Which hook is used to perform side effects in a functional component?",
    "What is the output of 'console.log(typeof useState);' in React?",
    "Which method is used to update the state in a class component?",
    "How do you create a list in React?"
];

const options = [
    ["A programming language", "A JavaScript library", "A CSS framework", "A database"],
    ["props", "state", "setState", "useState"],
    ["function MyComponent() {}", "class MyComponent extends React.Component {}", "const MyComponent = () => {}", "MyComponent = function() {}"],
    ["ReactDOM.render()", "React.render()", "render()", "ReactDOM.component()"],
    ["To pass data between components", "To manage state", "To define styles", "To handle events"],
    ["Using props", "Using state", "Using refs", "Using context"],
    ["useEffect", "useState", "useContext", "useReducer"],
    ["function", "object", "undefined", "string"],
    ["this.setState()", "this.updateState()", "this.state()", "this.changeState()"],
    ["<ul>{items.map(item => <li>{item}</li>)}</ul>", "<ul><li>{items}</li></ul>", "<ul>{items}</ul>", "<ul>{items.forEach(item => <li>{item}</li>)}</ul>"]
];

const actualans = [
    "A JavaScript library",
    "state",
    "const MyComponent = () => {}",
    "ReactDOM.render()",
    "To pass data between components",
    "Using props",
    "useEffect",
    "function",
    "this.setState()",
    "<ul>{items.map(item => <li>{item}</li>)}</ul>"
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