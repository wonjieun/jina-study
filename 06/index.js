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

await welcome(); // top level await (node 14+)
await askName();
