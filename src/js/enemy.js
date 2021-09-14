export class Question {
  constructor(question, correctAnswer, allAnswers) {
    this.question = question;
    this.correctAnswer = correctAnswer;
    this.allAnswers = allAnswers;
  }
}

export class Enemy {
  constructor(name, iq, attack, difficulty, category, items, amount) {
    this.name = name;
    this.iq = iq;
    this.attack = attack;
    this.difficulty = difficulty; 
    this.category = category;
    this.items = items;
    this.amount = amount;
    this.questions = [];
  }

  getQuestions() {
    return fetch(`https://opentdb.com/api.php?amount=${this.amount}&category=${this.category}&difficulty=${this.difficulty}&type=multiple`)
      .then(function(response) {
        if(!response.ok){
          throw Error(response.status);
        }
        return response.json();
      })
      .catch(function(error) {
        return error;
      });
  }

  getQ() {
    let test = this;
    this.getQuestions()
      .then(function(qArray) {
        for (let i = 0; i < qArray.results.length; i++) {
          let question = qArray.results[i].question;
          let correctA = qArray.results[i].correct_answer;
          let qAnswers = [qArray.results[i].correct_answer, qArray.results[i].incorrect_answers[0], qArray.results[i].incorrect_answers[1],   qArray.results[i].incorrect_answers[2]];
          let questionObj = new Question(question, correctA, qAnswers);
          test.questions.push(questionObj);
        }
      });
  }

  shuffleQuestions() {
    for (let i = 0; i < this.questions.length; i++) {
      this.questions[i].allAnswers.sort(() => 0.5 - Math.random());
    }
  }
}