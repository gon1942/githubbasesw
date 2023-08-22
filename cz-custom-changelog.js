"use strict";

const { prompt } = require('inquirer');

module.exports = {
  prompter: function(_inquirer, commit) {
    prompt([
      {
        type: 'list',
        name: 'type',
        message: '변경 유형을 선택하세요:',
        choices: [
          { name: '기능: 새로운 기능', value: 'feat' },
          { name: '버그: 버그 수정', value: 'fix' },
          { name: '문서: 문서만 변경', value: 'docs' },
          { name: '스타일: 코드 의미에 영향을 주지 않는 변경 (예. 포맷팅)', value: 'style' },
          { name: '리팩토링: 버그 수정, 기능 추가 없이 기존 코드 변경', value: 'refactor' },
          { name: '성능: 성능 개선', value: 'perf' },
          { name: '테스트: 테스트 추가 및 수정', value: 'test' },
          { name: '기타: 위의 카테고리에 해당하지 않는 변경', value: 'chore' }
        ]
      },
      {
        type: 'input',
        name: 'scope',
        message: '변경 범위를 지정하세요 (예: 로그인, 체크아웃, 프로필 등. 필요하지 않으면 Enter):'
      },
      {
        type: 'input',
        name: 'subject',
        message: '간단한 변경 사항 설명을 적어주세요:'
      },
      {
        type: 'input',
        name: 'body',
        message: '변경 사항에 대한 자세한 설명을 적어주세요 (선택 사항, Enter로 건너뛰기):'
      },
      {
        type: 'confirm',
        name: 'isBreaking',
        message: '이 변경사항이 호환성을 깨뜨리나요?',
        default: false
      },
      {
        type: 'input',
        name: 'breakingBody',
        message: '호환성을 깨뜨리는 변경 사항에 대한 설명을 입력하세요:',
        when: answers => answers.isBreaking
      }
    ]).then(answers => {
      commit(`${answers.type}(${answers.scope}): ${answers.subject}\n\n${answers.body}\n\nBREAKING CHANGE: ${answers.breakingBody}`);
    });
  }
};

