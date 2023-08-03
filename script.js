const quizData = [
  {
    question: "What is the capital of India ?",
    choices: ["New Delhi", "Kolkata", "Mumbai", "Goa"],
    correctAnswer: "New Delhi"
  },
  {
    question: "What is 7 * 8 + 2 ?",
    choices: ["48", "58", "64", "72"],
    correctAnswer: "58"
  },
  {
    question: "What is the chemical symbol for water ?",
    choices: ["H2O", "CO2", "O2", "C6H12O6"],
    correctAnswer: "H2O"
  }
];

const quizContainer = document.querySelector(".quiz-container");
const questionElement = document.getElementById("question");
const choicesElement = document.getElementById("choices");
const submitButton = document.getElementById("submit-btn");

let currentQuestionIndex = 0;
let score = 0;
function displayQuestion() {
  const currentQuestion = quizData[currentQuestionIndex];
  questionElement.textContent = currentQuestion.question;
  choicesElement.innerHTML = '';

  currentQuestion.choices.forEach(choice => {
    const label = document.createElement("label");
    const input = document.createElement("input");
    input.type = "radio";
    input.name = "choice";
    input.value = choice;
    label.appendChild(input);
    label.appendChild(document.createTextNode(choice));
    choicesElement.appendChild(label);
  });
}

function checkAnswer() {
  const userAnswer = document.querySelector("input[name='choice']:checked");
  if (!userAnswer) return;

  const selectedAnswer = userAnswer.value;
  const currentQuestion = quizData[currentQuestionIndex];
  if (selectedAnswer === currentQuestion.correctAnswer) {
    score++;
  }

  currentQuestionIndex++;
  if (currentQuestionIndex < quizData.length) {
    displayQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  quizContainer.innerHTML = `<h2>Quiz Completed!</h2>
      <p>Your Score: ${score} out of ${quizData.length}</p>
      <button onclick="location.reload()">Retry</button>`;
}

submitButton.addEventListener("click", checkAnswer);
displayQuestion();
