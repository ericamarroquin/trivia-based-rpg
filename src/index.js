import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './css/styles.css';
// import {Enemy, Question} from './js/enemy.js';
import {Theodore} from './js/jerks.js';
import {Player} from './js/player.js';
import {ans1, ans2, ans3, ans4} from './js/battle.js';


// function createEnemy() {

// }

$(document).ready(function() {
  let count = 0;
  let player1 = new Player("guy");
  Theodore.getQ();
  $('#testFight').click(function() {
    Theodore.shuffleQuestions();
    $('.question').html(`${Theodore.questions[count].question}`);
    $('#answer1').html(`${Theodore.questions[count].allAnswers[0]}`);
    $('#answer2').html(`${Theodore.questions[count].allAnswers[1]}`);
    $('#answer3').html(`${Theodore.questions[count].allAnswers[2]}`);
    $('#answer4').html(`${Theodore.questions[count].allAnswers[3]}`);
  
    let total = Theodore.questions.length-1;
    $('#answer1').click(function() {
      console.log(total, count);
      ans1(Theodore, player1);
      console.log(player1.iq, Theodore.iq);
      if (total > count){
        count ++;
        $('.question').html(`${Theodore.questions[count].question}`);
        $('#answer1').html(`${Theodore.questions[count].allAnswers[0]}`);
        $('#answer2').html(`${Theodore.questions[count].allAnswers[1]}`);
        $('#answer3').html(`${Theodore.questions[count].allAnswers[2]}`);
        $('#answer4').html(`${Theodore.questions[count].allAnswers[3]}`);
      }
    });
    $('#answer2').click(function() {
      ans2(Theodore, player1);
      console.log(player1.iq, Theodore.iq);
      if (total > count){
        count ++;
      }
      $('.question').html(`${Theodore.questions[count].question}`);
      $('#answer1').html(`${Theodore.questions[count].allAnswers[0]}`);
      $('#answer2').html(`${Theodore.questions[count].allAnswers[1]}`);
      $('#answer3').html(`${Theodore.questions[count].allAnswers[2]}`);
      $('#answer4').html(`${Theodore.questions[count].allAnswers[3]}`);
    });
    $('#answer3').click(function() {
      ans3(Theodore, player1);
      console.log(player1.iq, Theodore.iq);
      if (total > count){
        count ++;
      }
      $('.question').html(`${Theodore.questions[count].question}`);
      $('#answer1').html(`${Theodore.questions[count].allAnswers[0]}`);
      $('#answer2').html(`${Theodore.questions[count].allAnswers[1]}`);
      $('#answer3').html(`${Theodore.questions[count].allAnswers[2]}`);
      $('#answer4').html(`${Theodore.questions[count].allAnswers[3]}`);
    });
    $('#answer4').click(function() {
      ans4(Theodore, player1);
      console.log(player1.iq, Theodore.iq);
      if (total > count){
        count ++;
      }
      $('.question').html(`${Theodore.questions[count].question}`);
      $('#answer1').html(`${Theodore.questions[count].allAnswers[0]}`);
      $('#answer2').html(`${Theodore.questions[count].allAnswers[1]}`);
      $('#answer3').html(`${Theodore.questions[count].allAnswers[2]}`);
      $('#answer4').html(`${Theodore.questions[count].allAnswers[3]}`);
    });
  });
});

