import { Console } from '@woowacourse/mission-utils';
import { raceResult } from '../../../src/model/carModel.js';
import { raceOutput } from '../../../src/view/outputView/raceOutput.js';

jest.mock('@woowacourse/mission-utils', () => ({
  Console: { print: jest.fn() },
}));

jest.mock('../../../src/model/carModel.js', () => ({
  raceResult: jest.fn(),
}));

beforeEach(() => {
  jest.clearAllMocks();
});

describe('raceOutput unit test', () => {
  test('실행 결과 헤더와 공백 줄을 포함해 moveAttemptCount 횟수만큼 출력', () => {
    const cars = { pobi: '', woni: '' };

    raceOutput(cars, 3);

    expect(Console.print).toHaveBeenNthCalledWith(1, '\n실행 결과');

    expect(raceResult).toHaveBeenCalledTimes(3);

    expect(Console.print).toHaveBeenCalledTimes(1 + 3);
  });
});
