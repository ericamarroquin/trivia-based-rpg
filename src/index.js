import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import {enemyLibrary} from './js/jerks.js';
import {Player} from './js/player.js';
import {ans1, ans2, ans3, ans4, useItem, takeItems, takeExp} from './js/battle.js';


$(document).ready(function() {
  let count = 0;
  let enemyCount = 0;
  let totalEnemies = enemyLibrary.length-1;
  let player1 = new Player("guy");
  let enemy = enemyLibrary[enemyCount];
  enemy.getQ();
  console.log(enemy);
  setTimeout(() => { 
    $('#instructionsP').fadeIn(1500);
  }, 4000);
  setTimeout(() => { 
    $('#testFight').fadeIn(2000);
  }, 6000);
  
  function checkIq() {
    if (player1.iq <= 0) {
      $("#hideAnswers").hide();
      $("#playerStats, #enemyStats").hide();
      $('#gameOver').fadeIn();
      $('#playAgain').fadeIn();
    } else if (enemy.iq <= 0 && totalEnemies > enemyCount) {
      takeItems(player1, enemy);
      takeExp(player1, enemy);
      useItem(player1);
      $('#hideAnswers,#enemyName,.question,#enemyStats, #playerStats').hide();
      $('#playerStats, #nextBattle').fadeIn(2000);
    } else if (enemy.iq <= 0 && totalEnemies === enemyCount){
      $('#youWIN').fadeIn(2000);
      $('#nextBattle, #enemyName, #playerStats, .question, #enemyStats, #hideAnswers').hide();
    }
  }

  function updateStats() {
    $("#playerIQ").html(`IQ: ${player1.iq}`);
    $("#playerAttack").html(`Attack: ${player1.attack}`);
    $('#playerExp').html(`Exp: ${player1.exp}`);
    $('#level').html(`Level: ${player1.level}`);
    $("#playerItems").html(`Items: ${player1.items.join(", ")}`);
    $("#enemyIQ").html(`Enemy IQ: ${enemy.iq}`);
    $("#enemyAttack").html(`Enemy attack: ${enemy.attack}`);
    $("#enemyItems").html(`Enemy item: ${enemy.items}`);
  }

  function backstory(){
    $('#backstory').fadeIn(2000);
    $('#backstoryName').html(`Next Enemy: ${enemy.name}`);
    $('#backstoryStory').html(`${enemy.backstory} <br><br> Answer ${Math.ceil(enemy.iq/player1.attack)} questions correctly to defeat ${enemy.name}`);
    $('#fightThem').html(`Fight ${enemy.name}`);
    $('#nextBattle, #enemyName, #playerStats, .question, #hideAnswers').hide();
    updateStats(); 
  }

  $('#testFight').click(function() {
    $('#instructions').hide();
    backstory();
    
    function changeQuestion(){
      document.getElementById("answer1").style.color = "rgb(116, 54, 26)";
      document.getElementById("answer2").style.color = "rgb(116, 54, 26)";
      document.getElementById("answer3").style.color = "rgb(116, 54, 26)";
      document.getElementById("answer4").style.color = "rgb(116, 54, 26)";
      $('#hideAnswers').fadeIn();
      $('#enemyName').fadeIn();
      $('#enemyName').html(`${enemy.name}`);
      $('.question').html(`Question #${count+1}: <br> ${ enemy.questions[count].question}`);
      $('#answer1').html(`${ enemy.questions[count].allAnswers[0]}`);
      $('#answer2').html(`${ enemy.questions[count].allAnswers[1]}`);
      $('#answer3').html(`${ enemy.questions[count].allAnswers[2]}`);
      $('#answer4').html(`${ enemy.questions[count].allAnswers[3]}`);
    }

    $('#fightThem').click(function(){
      $('#backstory').hide();
      enemy.shuffleQuestions();
      $('#hideAnswers,#playerStats,#enemyStats,.question').fadeIn();
      $('#instructions').hide();
      updateStats();
      $('#testFight').hide();
      changeQuestion();
    });
    
    $('#nextBattle').click(function() {
      enemyCount++;
      count = 0;
      enemy = enemyLibrary[enemyCount];
      enemy.getQ();
      setTimeout(() => { 
        enemy.shuffleQuestions();
        console.log(enemy);
      }, 500);
      backstory();
    });


    let total =  enemy.questions.length-1;
    $('#answer1').click(function() {
      document.getElementById("answer1").style.color = "red";
      ans1(enemy, player1, count);
      if (total > count && player1.currentAnswer === "correct") {
        count ++;
        changeQuestion();
      }
      
      checkIq();
      updateStats();
    });

    $('#answer2').click(function() {
      document.getElementById("answer2").style.color = "red";
      ans2(enemy, player1, count);
      if (total > count && player1.currentAnswer === "correct") {
        count ++;
        changeQuestion();
      }
      checkIq();
      updateStats();
    });

    $('#answer3').click(function() {
      document.getElementById("answer3").style.color = "red";
      ans3(enemy, player1, count);
      if (total > count && player1.currentAnswer === "correct") {
        count ++;
        changeQuestion();
      }
      checkIq();
      updateStats();
    });
    
    $('#answer4').click(function() {
      document.getElementById("answer4").style.color = "red";
      ans4(enemy, player1, count);
      if (total > count && player1.currentAnswer === "correct") {
        count ++;
        changeQuestion();
      }
      checkIq();
      updateStats();
    });
  });
});