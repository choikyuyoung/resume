import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '3년간의 임상간호사 경험 이후 현재까지 6년간 석유화학공업단지와 LG사이언스파크, 그리고 현재 한국산업안전보건공단에 이르기까지 다양한 환경에서 보건관리자 업무를 수행하고 있습니다.',
    '최근에는 사업장 보건관리 뿐만 아니라 안전, 건설 분야 등 산업안전보건법 기반의 다양한 정책사업을 이해하고 많은 회사들을 지원 및 관리하고 있습니다',
    '',
  ],
  sign: 'Kyuyoung Choi',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
