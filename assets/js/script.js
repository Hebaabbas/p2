document.addEventListener("DOMContentLoaded", function() {
  let buttons = document.getElementsByTagName("button");
  for (let button of buttons) {
    button.addEventListener("click", function() {
      if (this.getAttribute("data-type") === "submit") {
        submitAnswers();
      }
    });
  }
});

let currentQuestionIndex = 0;
let rightAnswers = 0;
let wrongAnswers = 0;
let testSubmitted = false; // Variable to track if the test has been submitted

function openQuestionsPage() {
  window.location.href = "questions.html";
}

function nextQuestion() {
  if (testSubmitted) {
    return; // Do nothing if the test is already submitted
  }

  const questions = document.getElementsByClassName("question");
  const submitButton = document.getElementById("submit-button");
  const nextButton = document.getElementById("next-button");

  const currentQuestion = questions[currentQuestionIndex]; // Retrieve the current question element

  currentQuestion.style.display = "none";

  if (currentQuestionIndex < questions.length - 1) {
    currentQuestionIndex++;
    questions[currentQuestionIndex].style.display = "block";
  }

  // Show/hide buttons based on the current question index
  if (currentQuestionIndex === questions.length - 1) {
    submitButton.style.display = "block";
    nextButton.style.display = "none";
  }
}

function submitAnswers() {
  if (testSubmitted) {
    return; // Do nothing if the test is already submitted
  }

  // Question 1
  const question1 = document.getElementsByName('q1');
  const selectedAnswer1 = getSelectedAnswer(question1);
  if (selectedAnswer1 === 'q1-1') {
    rightAnswers++;
  } else {
    wrongAnswers++;
  }

  // Question 2
  const question2 = document.getElementsByName('q2');
  const selectedAnswer2 = getSelectedAnswer(question2);
  if (selectedAnswer2 === 'q2-3') {
    rightAnswers++;
  } else {
    wrongAnswers++;
  }

  // Question 3
  const question3 = document.getElementsByName('q3');
  const selectedAnswer3 = getSelectedAnswer(question3);
  if (selectedAnswer3 === 'q3-3') {
    rightAnswers++;
  } else {
    wrongAnswers++;
  }

  // Question 4
  const question4 = document.getElementsByName('q4');
  const selectedAnswer4 = getSelectedAnswer(question4);
  if (selectedAnswer4 === 'q4-2') {
    rightAnswers++;
  } else {
    wrongAnswers++;
  }

  // Update the scores on the HTML page
  document.getElementById('right').textContent = rightAnswers.toString();
  document.getElementById('wrong').textContent = wrongAnswers.toString();

  testSubmitted = true; // Set the testSubmitted flag to true

  // Disable the radio buttons to prevent further changes
  const questions = document.getElementsByClassName("question");
  for (let i = 0; i < questions.length; i++) {
    const options = questions[i].getElementsByTagName("input");
    for (let j = 0; j < options.length; j++) {
      options[j].disabled = true;
    }
  }
}

function getSelectedAnswer(question) {
  for (let i = 0; i < question.length; i++) {
    if (question[i].checked) {
      return question[i].value;
    }
  }
  return null; // Return null if no answer is selected
}

function goToArticlePage() {
  window.location.href = "index.html";
}

function goToRightAnswers() {
  window.location.href = "answers.html";
}