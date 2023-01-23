'use strict';

// HTML DOM references
let titles = document.querySelector('#title');
let options = document.querySelector('#options');
let display = document.querySelector('.display');
let hide = document.querySelector('#start-quiz');
let startBtn = document.querySelector('#start');
let nextBtn = document.querySelector('#next');

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

// Display random question
let count = 0;

function displayQuestion() {
  titles.textContent = questionTitles[count];
  display.setAttribute('style', 'display: inline');
  hide.setAttribute('style', 'display: none');
}

function nextQuestion() {
    count++;
    titles.textContent = questionTitles[count];
  }

startBtn.addEventListener('click', displayQuestion);
nextBtn.addEventListener('click', nextQuestion);