'use strict';

// HTML DOM references
let titles = document.querySelector('#title');
let options = document.querySelector('#options');
let display = document.querySelector('.display');
let start = document.querySelector('#start-quiz');
let end = document.querySelector('#end-quiz');
let startBtn = document.querySelector('#start');
let nextBtn = document.querySelector('#next');
let radio1 = document.getElementById('rad1');
let radio2 = document.getElementById('rad2');
let radio3 = document.getElementById('rad3');
let radios = document.getElementsByTagName('input');
let option1 = document.getElementById('Radios1');
let option2 = document.getElementById('Radios2');
let option3 = document.getElementById('Radios3');
let score = document.getElementById('score');

// Shuffle array
let questionsChosen = [];
let shuffle = questions.sort(() => 0.5 - Math.random());
questionsChosen = shuffle.slice(0, 5);

// Array of questions
let questionTitles = [];
questionsChosen.forEach(item => questionTitles.push(item.question));

// Array of answer options
let answerOptions = [];
questions.forEach(item => answerOptions.push(item.options));
answerOptions = answerOptions.slice(0, 5);

// Array of correct answers
let correctAnswers = [];
questions.forEach(item => correctAnswers.push(item.answer));
correctAnswers = correctAnswers.slice(0, 5);

// Add answer options to radios
function radioContent() {
  radio1.textContent = answerOptions[count][0];
  radio2.textContent = answerOptions[count][1];
  radio3.textContent = answerOptions[count][2];
}

// Display random question
let count = 0;

function displayQuestion() {
  titles.textContent = questionTitles[count];
  radioContent()
  display.setAttribute('style', 'display: inline');
  start.setAttribute('style', 'display: none');
}

// Display next questions
function nextQuestion() {
    count++;
    titles.textContent = questionTitles[count];
    radioContent()
    radios[0].click()
}

// Store user answers
let chosenAnswers = [];

function userAnswers() {
  if (option1.checked) { chosenAnswers.push(parseInt(option1.value)); } 
  if (option2.checked) { chosenAnswers.push(parseInt(option2.value)); } 
  if (option3.checked) { chosenAnswers.push(parseInt(option3.value)); }
}

// Count next button clicks
let clickCount = 0;

nextBtn.onclick = function() {
  clickCount++;
  userAnswers()
  checkScore()
  if (clickCount === 5) {
    displayScore()
  }
}

// Count score
let scoreCount = 0;

function checkScore() {
  while (chosenAnswers.length === 5) {
    for (let i = 0; i < chosenAnswers.length; i++) {
      if (chosenAnswers[i] === correctAnswers[i]) { scoreCount++; }
      }
    break;
  }
  score.textContent = scoreCount;
}

// Display score
function displayScore() {
  options.setAttribute('style', 'display: none');
  end.setAttribute('style', 'display: inline-block');
}

// Event listeners 
startBtn.addEventListener('click', displayQuestion);
nextBtn.addEventListener('click', nextQuestion);