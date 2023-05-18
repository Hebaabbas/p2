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

// This variable keeps track of the index number of the question that is being shown.
let currentQuestionIndex = 0;
// This varible keeps the count of the right answers stored.
let rightAnswers = 0;
// This varible keeps the count of the wrong answers stored.
let wrongAnswers = 0;
// Variable is to track if the test has been submitted.
let testSubmitted = false;

// This function directs the user to the question.html page.
function openQuestionsPage() {
  window.location.href = "questions.html";
}
// This function is called when the user clicks on the "Next Question" button which directs the user to the next question.
function nextQuestion() {
  if (testSubmitted) {
    return; 
  }
  const questions = document.getElementsByClassName("question");
  const submitButton = document.getElementById("submit-button");
  const nextButton = document.getElementById("next-button");

  const currentQuestion = questions[currentQuestionIndex]; 

  currentQuestion.style.display = "none";

  if (currentQuestionIndex < questions.length - 1) {
    currentQuestionIndex++;
    questions[currentQuestionIndex].style.display = "block";
  }

  // This function is to show or hide buttons based on the current question index
  if (currentQuestionIndex === questions.length - 1) {
    submitButton.style.display = "block";
    nextButton.style.display = "none";
  }
}
// This function is to called when the user clicks on the "Submit my answers" button.
function submitAnswers() {
  if (testSubmitted) {
    return; 
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

  // Update the wrong and right points on the HTML page
  document.getElementById('right').textContent = rightAnswers.toString();
  document.getElementById('wrong').textContent = wrongAnswers.toString();

  testSubmitted = true; // Set the testSubmitted flag to true
}
// This function returns the answer of each question and will return null incase no answer was selected. 
function getSelectedAnswer(question) {
  for (let i = 0; i < question.length; i++) {
    if (question[i].checked) {
      return question[i].value;
    }
  }
  return null; 
}
// This function will redirect the user to the "index.html" page.
function goToArticlePage() {
  window.location.href = "index.html";
}
// This function will redirect the user to the "answers.html" page.
function goToRightAnswers() {
  window.location.href = "answers.html";
}