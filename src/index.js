import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './css/styles.css';
// import {Enemy, Question} from './js/enemy.js';
import {Theodore} from './js/jerks.js';

$(document).ready(function() {
  Theodore.shuffleQuestions();
  $('#testFight').click(function() {
      $('.question').html(`${Theodore.questions[0].question}`)
      $('#answer1').html(`${Theodore.questions[0].allAnswers[0]}`)
      $('#answer2').html(`${Theodore.questions[0].allAnswers[1]}`)
      $('#answer3').html(`${Theodore.questions[0].allAnswers[2]}`)
      $('#answer4').html(`${Theodore.questions[0].allAnswers[3]}`)
  })
});

