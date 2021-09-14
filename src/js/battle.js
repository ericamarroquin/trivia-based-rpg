export function ans1(enemy, player) {
  if(enemy.questions[0].allAnswers[0] === enemy.questions[0].correctAnswer) {
    enemy.iq = (enemy.iq - player.attack);
  } else {
    player.iq = (player.iq - enemy.attack);
  }
}
export function ans2(enemy, player) {
  if(enemy.questions[0].allAnswers[1] === enemy.questions[0].correctAnswer) {
    enemy.iq = (enemy.iq - player.attack);
  } else {
    player.iq = (player.iq - enemy.attack);
  }
}
export function ans3(enemy, player) {
  if(enemy.questions[0].allAnswers[2] === enemy.questions[0].correctAnswer) {
    enemy.iq = (enemy.iq - player.attack);
  } else {
    player.iq = (player.iq - enemy.attack);
  }
}
export function ans4(enemy, player) {
  if(enemy.questions[0].allAnswers[3] === enemy.questions[0].correctAnswer) {
    enemy.iq = (enemy.iq - player.attack);
  } else {
    player.iq = (player.iq - enemy.attack);
  }
}