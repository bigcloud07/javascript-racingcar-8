import App from '../src/App.js';
import { MissionUtils } from '@woowacourse/mission-utils';

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn().mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();

  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

afterEach(() => {
  jest.restoreAllMocks();
});

const cases = [
  [
    '단일 라운드, 2대: pobi만 전진',
    ['pobi,woni', '1'],
    [4, 3],
    ['pobi : -', 'woni : ', '최종 우승자 : pobi'],
  ],
  [
    '두 라운드, 2대: woni 우승',
    ['pobi,woni', '2'],
    [4, 5, 3, 9],
    ['pobi : -', 'woni : -', '최종 우승자 : woni'],
  ],
  [
    '공동 우승 (동점)',
    ['pobi,woni', '1'],
    [4, 4],
    ['pobi : -', 'woni : -', '최종 우승자 : pobi, woni'],
  ],
  [
    '3대, 3라운드: 공동 우승 상황',
    ['a,b,c', '3'],
    [4, 4, 3, 3, 9, 4, 4, 3, 4],
    ['a : --', 'b : --', 'c : --', '최종 우승자 : a, b, c'],
  ],
];

describe('자동차 경주 기능 전체 테스트', () => {
  test.each(cases)('%s', async (name, inputs, randoms, expectedLines) => {
    const logSpy = getLogSpy();
    mockQuestions([...inputs]);
    mockRandoms([...randoms]);

    const app = new App();
    await app.run();

    expectedLines.forEach((line) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(line));
    });
  });
});
