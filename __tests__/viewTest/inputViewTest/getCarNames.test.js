import { Console } from '@woowacourse/mission-utils';
import getCarNames from '../../../src/view/inputView/getCarNames.js';

jest.mock('@woowacourse/mission-utils', () => ({
  Console: {
    readLineAsync: jest.fn(),
  },
}));

describe('getCarNames unit test', () => {
  test('사용자 입력값을 반환해야 한다', async () => {
    const mockInput = 'pobi,woni,jun';
    Console.readLineAsync.mockResolvedValue(mockInput);

    const result = await getCarNames();

    expect(result).toBe(mockInput);
    expect(Console.readLineAsync).toHaveBeenCalledWith(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
    );
  });
});
