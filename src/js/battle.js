import { allItems } from "./items";

export function ans1(enemy, player, count) {
  if(enemy.questions[count].allAnswers[0] === enemy.questions[count].correctAnswer) {
    enemy.iq = (enemy.iq - player.attack);
    player.currentAnswer = "correct";
  } else {
    player.iq = (player.iq - enemy.attack);
    player.currentAnswer = "incorrect";
  }
}

export function ans2(enemy, player, count) {
  if(enemy.questions[count].allAnswers[1] === enemy.questions[count].correctAnswer) {
    enemy.iq = (enemy.iq - player.attack);
    player.currentAnswer = "correct";
  } else {
    player.iq = (player.iq - enemy.attack);
    player.currentAnswer = "incorrect";
  }
}

export function ans3(enemy, player, count) {
  if(enemy.questions[count].allAnswers[2] === enemy.questions[count].correctAnswer) {
    enemy.iq = (enemy.iq - player.attack);
    player.currentAnswer = "correct";
  } else {
    player.iq = (player.iq - enemy.attack);
    player.currentAnswer = "incorrect";
  }
}

export function ans4(enemy, player, count) {
  if(enemy.questions[count].allAnswers[3] === enemy.questions[count].correctAnswer) {
    enemy.iq = (enemy.iq - player.attack);
    player.currentAnswer = "correct";
  } else {
    player.iq = (player.iq - enemy.attack);
    player.currentAnswer = "incorrect";
  }
}

export function useItem(player, item) {
  for (let i = 0; i < allItems.length; i++) {
    if (item === allItems[i].name) {
      player[allItems[i].statAffected] += allItems[i].statIncrease;
    }
  }
}

export function takeItems(toPlayer, fromPlayer) {
  toPlayer.items.push(fromPlayer.items);
  fromPlayer.items = [];
}

export function takeExp(toPlayer, fromPlayer) {
  if (toPlayer.exp >= 10) {
    toPlayer.level += 1;
    toPlayer.exp = 0;
  } else {
    toPlayer.exp += fromPlayer.exp;
  }
}