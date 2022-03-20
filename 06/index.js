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
    🚨 질문에 틀린 답을 입력하면 종료!
    모두 맞히면 ...
  `)
}

await welcome(); // top level await (node 14+)
