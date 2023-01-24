'use strict';

// HTML DOM references
let titles = document.querySelector('#title');
let options = document.querySelector('#options');
let display = document.querySelector('.display');
let start = document.querySelector('#start-quiz');
let end = document.querySelector('#end-quiz');
let startBtn = document.querySelector('#start');
let nextBtn = document.querySelector('#next');
let submitBtn = document.querySelector('#submit');
let radio1 = document.getElementById('rad1');
let radio2 = document.getElementById('rad2');
let radio3 = document.getElementById('rad3');
let option1 = document.getElementById('Radios1');
let option2 = document.getElementById('Radios2');
let option3 = document.getElementById('Radios3');
let scoreIn = document.getElementById('score');

// Shuffle array
let questionsChosen = [];
let shuffle = questions.sort(() => 0.5 - Math.random());
questionsChosen = shuffle.slice(0, 5);

// Array of answer options
let answerOptions = [];
questions.forEach(item => answerOptions.push(item.options));
answerOptions = answerOptions.slice(0, 5);

// Array of questions
let questionTitles = [];
questionsChosen.forEach(item => questionTitles.push(item.question));

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
  titles.setAttribute('style', 'font-size: 100%');
  nextBtn.setAttribute('style', 'font-size: 70%');
}

// Display next questions
function nextQuestion() {
    count++;
    titles.textContent = questionTitles[count];
    radioContent()
}

// Count next button clicks and store answers
let clickCount = 0;

nextBtn.onclick = function() {
  clickCount++;
  userAnswers()
  
  if (clickCount === 5) {
    displayScore()
    options.setAttribute('style', 'display: none');
  }
}

// Store user answers
let chosenAnswers = [];

function userAnswers() {
  if (option1.checked) { chosenAnswers.push(parseInt(option1.value)); } 
  if (option2.checked) { chosenAnswers.push(parseInt(option2.value)); } 
  if (option3.checked) { chosenAnswers.push(parseInt(option3.value)); }
}

function checkScore() {
  let score = 0;
  while (chosenAnswers.length === 5) {
    if (chosenAnswers[0] === correctAnswers[0]) { score++; }
    if (chosenAnswers[1] === correctAnswers[1]) { score++; }
    if (chosenAnswers[2] === correctAnswers[2]) { score++; }
    if (chosenAnswers[3] === correctAnswers[3]) { score++; }
    if (chosenAnswers[4] === correctAnswers[4]) { score++; }
    break;
  }
  scoreIn.textContent = score;
}

// Display score
function displayScore() {
  end.setAttribute('style', 'display: inline-block');
  checkScore()
}

// Event listeners 
startBtn.addEventListener('click', displayQuestion);
nextBtn.addEventListener('click', nextQuestion);