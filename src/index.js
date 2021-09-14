import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './css/styles.css';
// import {Enemy, Question} from './js/enemy.js';
import {Theodore} from './js/jerks.js';
import {Player} from './js/player.js'
import {ans1, ans2, ans3, ans4} from './js/battle.js'


// function createEnemy() {

// }

$(document).ready(function() {
  let player1 = new Player("guy");
  Theodore.getQ();
  $('#testFight').click(function() {
    Theodore.shuffleQuestions();
      $('.question').html(`${Theodore.questions[0].question}`)
      $('#answer1').html(`${Theodore.questions[0].allAnswers[0]}`)
      $('#answer2').html(`${Theodore.questions[0].allAnswers[1]}`)
      $('#answer3').html(`${Theodore.questions[0].allAnswers[2]}`)
      $('#answer4').html(`${Theodore.questions[0].allAnswers[3]}`)
  });
  $('#answer1').click(function() {
    ans1(Theodore, player1);
    console.log(player1.iq, Theodore.iq);
  })
  $('#answer2').click(function() {
    ans2(Theodore, player1);
    console.log(player1.iq, Theodore.iq);
  })
  $('#answer3').click(function() {
    ans3(Theodore, player1);
    console.log(player1.iq, Theodore.iq);
  })
  $('#answer4').click(function() {
    ans4(Theodore, player1);
    console.log(player1.iq, Theodore.iq);
  })
});

