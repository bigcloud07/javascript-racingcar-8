import { Console } from '@woowacourse/mission-utils';
import winnerOutput from '../../../src/view/outputView/winnerOutput.js';

jest.mock('@woowacourse/mission-utils', () => ({
  Console: { print: jest.fn() },
}));

beforeEach(() => {
  jest.clearAllMocks();
});

describe('winnerOutput unit test', () => {
  test('우승자 이름을 콘솔에 출력한다', () => {
    winnerOutput('pobi');

    expect(Console.print).toHaveBeenCalledTimes(1);

    expect(Console.print).toHaveBeenCalledWith('최종 우승자 : pobi');
  });

  test('공동 우승자 여러 명도 올바르게 출력된다', () => {
    winnerOutput('pobi, jun, woni');

    expect(Console.print).toHaveBeenCalledWith('최종 우승자 : pobi, jun, woni');
  });
});
