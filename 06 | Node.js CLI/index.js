#!/user/bin/env node

import chalk from 'chalk';
import inquirer from 'inquirer';
import gradient from 'gradient-string';
import chalkAnimation from 'chalk-animation';
import figlet from 'figlet';
import { createSpinner } from 'nanospinner';

let playerName;

const sleep = (ms = 2000) => new Promise(resolve => setTimeout(resolve, ms));

async function welcome() {
  const rainbowTitle = chalkAnimation.rainbow('퀴이이이이이이이이이이이이이즈\n');

  await sleep();
  rainbowTitle.stop();

  console.log(`
    ${chalk.bgGreen('게임방법')}
    이름을 영어로 입력하세요.
    퀴즈의 정답을 맞춰보세요.
    🚨 틀린 답을 입력하면 종료!
    모두 맞히면 ...
  `);
}

async function askName() {
  const answer = await inquirer.prompt({
    name: 'player_name',
    type: 'input',
    message: '이름을 영어로 입력',
    default() {
      return 'jina';
    },
  });

  playerName = answer.player_name;
}

async function question1() {
  const answers = await inquirer.prompt({
    name: 'question_1',
    type: 'list',
    message: '2022년 3월 20일 이슬이의 나이는?',
    choices: [
      '7살',
      '8살',
      '9살',
      '10살',
    ],
  });

  return handleAnswer(answers.question_1 === '9살');
}
async function question2() {
  const answers = await inquirer.prompt({
    name: 'question_2',
    type: 'list',
    message: '이슬이가 짜증내면?',
    choices: [
      '으르렁',
      '크르렁',
      '크르르',
      '캬르르',
    ],
  });

  return handleAnswer(answers.question_2 === '크르르');
}

async function handleAnswer(isCorrect) {
  const spinner = createSpinner('맞나?').start();
  await sleep();

  if (isCorrect) {
    spinner.success({ text: `굿잡 ${playerName} 킵고잉` });
  } else {
    spinner.error({ text: `🚨🚨🚨 때애애애앵 🚔` });
    process.exit(1); // 0 Success, 1 Errors (kill the scripts)
  }
}

function winner() {
  console.clear();
  const msg = `${playerName} , \nAre you a genius ?`

  figlet(msg, (err, data) => {
    console.log(gradient.pastel.multiline(data));
  });
}

await welcome(); // top level await (node 14+)
await askName();
await question1();
await question2();
winner();
