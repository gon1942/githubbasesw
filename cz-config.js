const { prompt } = require('inquirer');
const cz = require('cz-conventional-changelog');

module.exports = {
  types: [
    { value: 'feat',     name: '기능: 새로운 기능' },
    { value: 'fix',      name: '버그: 버그 수정' },
    // ... 여기에 다른 유형들을 추가합니다 ...
  ],

  scopes: [], 

  allowBreakingChanges: ['feat', 'fix'],
  upperCaseSubject: false,
  commitConfirmationStep: true,
  skipQuestions: ['body', 'footer'],

prompter: (inquirer, commit) => {
    cz.prompter(inquirer, (answers) => {
        commit(`${answers.type}(${answers.scope}): ${answers.subject}`);
    });
}
};

