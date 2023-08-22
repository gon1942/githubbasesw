"use strict";

const { prompt } = require('inquirer');

module.exports = {
  prompter: function(_inquirer, commit) {
    prompt([{
      type: 'list',
      name: 'type',
      message: '변경 유형을 선택하세요:',
      choices: [
        { name: '기능: 새로운 기능', value: 'feat' },
        { name: '버그: 버그 수정', value: 'fix' },
        // 여기에 추가적인 유형들을 추가할 수 있습니다.
      ]
    }, {
      type: 'input',
      name: 'subject',
      message: '간단한 변경 사항 설명을 적어주세요:'
    }]).then(answers => {
      commit(`${answers.type}: ${answers.subject}`);
    });
  }
};

