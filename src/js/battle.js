export function ans1(enemy, player, count) {
  if(enemy.questions[count].allAnswers[0] === enemy.questions[count].correctAnswer) {
    enemy.iq = (enemy.iq - player.attack);
  } else {
    player.iq = (player.iq - enemy.attack);
  }
}

export function ans2(enemy, player, count) {
  if(enemy.questions[count].allAnswers[1] === enemy.questions[count].correctAnswer) {
    enemy.iq = (enemy.iq - player.attack);
  } else {
    player.iq = (player.iq - enemy.attack);
  }
}

export function ans3(enemy, player, count) {
  if(enemy.questions[count].allAnswers[2] === enemy.questions[count].correctAnswer) {
    enemy.iq = (enemy.iq - player.attack);
  } else {
    player.iq = (player.iq - enemy.attack);
  }
}

export function ans4(enemy, player, count) {
  if(enemy.questions[count].allAnswers[3] === enemy.questions[count].correctAnswer) {
    enemy.iq = (enemy.iq - player.attack);
  } else {
    player.iq = (player.iq - enemy.attack);
  }
}

