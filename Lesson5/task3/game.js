/* ______________________Task 3______________________ */

const nodes = [
  {
    id: 1,
    text: 'You wake up in a strange place and you see a jar of blue goo near you.',
    options: [
      {
        text: 'Take the goo',
        nextText: 2
      },
      {
        text: 'Leave the goo',
        nextText: 2
      }
    ]
  },
  {
    id: 2,
    text: 'You venture forth in search of answers to where you are when you come across a merchant.',
    options: [
      {
        text: 'Trade the goo for a sword',
        nextText: 3
      },
      {
        text: 'Trade the goo for a shield',
        nextText: 3
      },
      {
        text: 'Ignore the merchant',
        nextText: 3
      }
    ]
  },
  {
    id: 3,
    text: 'After leaving the merchant you start to feel tired and stumble upon a small town next to a dangerous looking castle.',
    options: [
      {
        text: 'Explore the castle',
        nextText: 4
      },
      {
        text: 'Find a room to sleep at in the town',
        nextText: 5
      },
      {
        text: 'Find some hay in a stable to sleep in',
        nextText: 6
      }
    ]
  },
  {
    id: 4,
    text: 'You are so tired that you fall asleep while exploring the castle and are killed by some terrible monster in your sleep.',
    options: [
      {
        text: 'Restart',

        // Здесь исправила "-1" на "1"
        nextText: 1
      }
    ]
  },
  {
    id: 5,
    text: 'Without any money to buy a room you break into the nearest inn and fall asleep. After a few hours of sleep the owner of the inn finds you and has the town guard lock you in a cell.',
    options: [
      {
        text: 'Restart',

        // Здесь исправила "-1" на "1"
        nextText: 1
      }
    ]
  },
  {
    id: 6,
    text: 'You wake up well rested and full of energy ready to explore the nearby castle.',
    options: [
      {
        text: 'Explore the castle',
        nextText: 7
      }
    ]
  },
  {
    id: 7,
    text: 'While exploring the castle you come across a horrible monster in your path.',
    options: [
      {
        text: 'Try to run',
        nextText: 8
      },
      {
        text: 'Attack it with your sword',
        nextText: 9
      },
      {
        text: 'Hide behind your shield',
        nextText: 10
      },
      {
        text: 'Throw the blue goo at it',
        nextText: 11
      }
    ]
  },
  {
    id: 8,
    text: 'Your attempts to run are in vain and the monster easily catches.',
    options: [
      {
        text: 'Restart',

        // Здесь исправила "-1" на "1"
        nextText: 1
      }
    ]
  },
  {
    id: 9,
    text: 'You foolishly thought this monster could be slain with a single sword.',
    options: [
      {
        text: 'Restart',

        // Здесь исправила "-1" на "1"
        nextText: 1
      }
    ]
  },
  {
    id: 10,
    text: 'The monster laughed as you hid behind your shield and ate you.',
    options: [
      {
        text: 'Restart',

        // Здесь исправила "-1" на "1"
        nextText: 1
      }
    ]
  },
  {
    id: 11,
    text: 'You threw your jar of goo at the monster and it exploded. After the dust settled you saw the monster was destroyed. Seeing your victory you decide to claim this castle as your and live out the rest of your days there.',
    options: [
      {
        text: 'Congratulations. Play Again.',

        // Здесь исправила "-1" на "1"
        nextText: 1
      }
    ]
  }
];

const game = {
  textNodes: nodes,
  logList: document.getElementById('log'),

  start() {
    const firstQuestion = this.textNodes.find((q) => q.id === 1);

    // Здесь переименовала переменную nextQuestionId в answer
    let answer = this.makeStep(firstQuestion);

    // Для переменной nextQuestionId присвоила другое значение
    let nextQuestionId = firstQuestion.options[answer - 1].nextText;

    // BUG: find correct question by user's answer - Ваш комментарий оставила
    this.log(answer);

    // В цикле добавила null, т.к. цикл уходил в себя и приходилось обновлять страницу
    // Добавила строки "console.log(nextQuestion)" и "nextQuestionId = nextQuestion.options[answer - 1].nextText"
    while (+nextQuestionId !== null) {
      const nextQuestion = this.textNodes.find((q) => q.id === +nextQuestionId);
      console.log(nextQuestion);
      answer = this.makeStep(nextQuestion);
      this.log(answer);
      nextQuestionId = nextQuestion.options[answer - 1].nextText;
    }
  },

  makeStep(question) {
    const questionText = `
      ${question.text}

      Answers:
      ${this.getOptions(question)}
    `;

    return prompt(questionText);
  },

  getOptions(question) {
    let options = '';

    for (let i = 0; i < question.options.length; i++) {
      options += `${i + 1}. ${question.options[i].text}\n`;
    }
    return options;
  },

  log(answer) {
    const li = document.createElement('li');
    li.innerHTML = answer;
    this.logList.appendChild(li);
  }
};

game.start();