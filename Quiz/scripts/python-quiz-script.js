const question = [
    "What is Python?",
    "Which of the following is not a Python data type?",
    "How do you declare a variable in Python?",
    "Which operator is used to compare two values in Python?",
    "What is the correct syntax for creating a function in Python?",
    "How do you write a comment in Python?",
    "Which method is used to print text in Python?",
    "What is the output of 'print(5 + 5)' in Python?",
    "Which keyword is used to define a class in Python?",
    "How do you create a list in Python?"
];

const options = [
    ["A markup language", "A programming language", "A styling language", "A database language"],
    ["int", "float", "string", "boolean"],
    ["x = 5", "var x = 5", "int x = 5", "declare x = 5"],
    ["=", "==", "===", "=>"],
    ["def myFunction():", "function myFunction():", "void myFunction():", "func myFunction():"],
    ["<!-- comment -->", "// comment", "# comment", "/* comment */"],
    ["print()", "println()", "System.out.println()", "console.log()"],
    ["10", "55", "Error", "NaN"],
    ["class", "Class", "className", "define"],
    ["[1, 2, 3]", "{1, 2, 3}", "(1, 2, 3)", "<1, 2, 3>"]
];

const actualans = [
    "A programming language",
    "string",
    "x = 5",
    "==",
    "def myFunction():",
    "# comment",
    "print()",
    "10",
    "class",
    "[1, 2, 3]"
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