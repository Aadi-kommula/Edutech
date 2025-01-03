const question = [
    "What is Git?",
    "Which command is used to initialize a new Git repository?",
    "What is the purpose of the 'git clone' command?",
    "Which command is used to stage changes in Git?",
    "What is the purpose of the 'git commit' command?",
    "Which command is used to view the commit history in Git?",
    "What is the purpose of the 'git push' command?",
    "Which command is used to create a new branch in Git?",
    "What is the purpose of the 'git pull' command?",
    "Which command is used to merge branches in Git?"
];

const options = [
    ["A programming language", "A version control system", "A database", "A text editor"],
    ["git init", "git start", "git new", "git create"],
    ["To create a new branch", "To copy a repository", "To delete a repository", "To stage changes"],
    ["git add", "git stage", "git commit", "git push"],
    ["To save changes to the repository", "To stage changes", "To create a new branch", "To view the commit history"],
    ["git log", "git history", "git commits", "git view"],
    ["To upload changes to a remote repository", "To download changes from a remote repository", "To stage changes", "To create a new branch"],
    ["git branch", "git new-branch", "git create-branch", "git checkout -b"],
    ["To upload changes to a remote repository", "To download changes from a remote repository", "To stage changes", "To create a new branch"],
    ["git merge", "git combine", "git join", "git integrate"]
];

const actualans = [
    "A version control system",
    "git init",
    "To copy a repository",
    "git add",
    "To save changes to the repository",
    "git log",
    "To upload changes to a remote repository",
    "git branch",
    "To download changes from a remote repository",
    "git merge"
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