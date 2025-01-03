const question = [
    "What is Java?",
    "Which of the following is not a Java keyword?",
    "How do you declare a variable in Java?",
    "Which operator is used to compare two values in Java?",
    "What is the correct syntax for creating an object in Java?",
    "How do you write a comment in Java?",
    "Which method is used to print text in Java?",
    "What is the output of 'System.out.println(5 + 5);' in Java?",
    "Which keyword is used to define a class in Java?",
    "How do you create a method in Java?"
];

const options = [
    ["A markup language", "A programming language", "A styling language", "A database language"],
    ["int", "float", "string", "boolean"],
    ["int x;", "variable x;", "v x;", "declare x;"],
    ["=", "==", "===", "=>"],
    ["new MyClass();", "MyClass obj = new MyClass();", "MyClass obj = MyClass();", "obj = new MyClass();"],
    ["<!-- comment -->", "// comment", "/* comment */", "# comment"],
    ["print()", "println()", "System.out.println()", "console.log()"],
    ["10", "55", "Error", "NaN"],
    ["class", "Class", "className", "define"],
    ["method myMethod()", "void myMethod()", "function myMethod()", "def myMethod()"]
];

const actualans = [
    "A programming language",
    "string",
    "int x;",
    "==",
    "MyClass obj = new MyClass();",
    "// comment",
    "System.out.println()",
    "10",
    "class",
    "void myMethod()"
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