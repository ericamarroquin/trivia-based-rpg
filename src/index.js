import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import {enemyLibrary} from './js/jerks.js';
import {Player} from './js/player.js';
import {ans1, ans2, ans3, ans4} from './js/battle.js';


$(document).ready(function() {
  let count = 0;
  let enemyCount = 0;
  let totalEnemies = enemyLibrary.length-1;
  let player1 = new Player("guy");
  let enemy = enemyLibrary[enemyCount];
  enemy.getQ();
  console.log(enemy);

  function checkIq() {
    if (player1.iq <= 0) {
      console.log("GAME OVER");
      return "GAME OVER";
    } else if (enemy.iq <= 0 && totalEnemies > enemyCount) {
      console.log("YOU WIN!");
      $('#enemy2').show();
    } else if (enemy.iq <= 0 && totalEnemies === enemyCount){
      console.log("YOU'RE THE SMARTEST PERSON EVER: IQ = 9000");
    }
  }


  $('#testFight').click(function() {
    enemy.shuffleQuestions();
    
    function changeQuestion(){
      $('#enemy1').html(`${enemy.name}`);
      $('.question').html(`${ enemy.questions[count].question}`);
      $('#answer1').html(`${ enemy.questions[count].allAnswers[0]}`);
      $('#answer2').html(`${ enemy.questions[count].allAnswers[1]}`);
      $('#answer3').html(`${ enemy.questions[count].allAnswers[2]}`);
      $('#answer4').html(`${ enemy.questions[count].allAnswers[3]}`);
    }
    changeQuestion();
    
    $('#enemy2').click(function() {
      enemyCount++;
      count = 0;
      enemy = enemyLibrary[enemyCount];
      enemy.getQ();
      setTimeout(() => { 
        enemy.shuffleQuestions();
        changeQuestion();
        console.log(enemy);
      }, 1000);
      $('#enemy2').hide();
    });

    let total =  enemy.questions.length-1;
    $('#answer1').click(function() {
      console.log(total, count);
      ans1(enemy, player1, count);
      console.log(player1.iq,  enemy.iq);
      if (total > count){
        count ++;
      }
      checkIq();
      changeQuestion();
    });

    $('#answer2').click(function() {
      console.log(total, count);
      ans2(enemy, player1, count);
      console.log(player1.iq,  enemy.iq);
      if (total > count){
        count ++;
      }
      checkIq();
      changeQuestion();
    });

    $('#answer3').click(function() {
      console.log(total, count);
      ans3(enemy, player1, count);
      console.log(player1.iq,  enemy.iq);
      if (total > count){
        count ++;
      }
      checkIq();
      changeQuestion();
    });
    
    $('#answer4').click(function() {
      console.log(total, count);
      ans4(enemy, player1, count);
      console.log(player1.iq,  enemy.iq);
      if (total > count){
        count ++;
      }
      checkIq();
      changeQuestion();
    });
  });
});