document.addEventListener("DOMContentLoaded", function() {
  let buttons = document.getElementsByTagName("button");
  for (let button of buttons) {
    button.addEventListener("click", function() {
      if (this.getAttribute("data-type") === "submit") {
        checkAnswers();
      }
    });
  }
});

function openQuestionsPage() {
  window.location.href = "questions.html";
}

function checkAnswers() {
  let rightAnswers = 0;
  let wrongAnswers = 0;

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

