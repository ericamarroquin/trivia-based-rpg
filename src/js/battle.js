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
  if (item === "Honor-Roll Ribbon") {
    player.iq += 5;
  } else if (item === "Philosopher's Stone") {
    player.attack += 2;
  }
}

export function takeItems(toPlayer, fromPlayer) {
  toPlayer.items.push(fromPlayer.items);
  fromPlayer.items = [];
}