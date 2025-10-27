import { Console } from '@woowacourse/mission-utils';
import getMoveAttemptCount from '../../../src/view/inputView/getMoveAttemptCount.js';

jest.mock('@woowacourse/mission-utils', () => ({
  Console: {
    readLineAsync: jest.fn(),
  },
}));

describe('getMoveAttemptCount unit test', () => {
  test('사용자가 입력한 시행 횟수를 반환해야 한다', async () => {
    const mockInput = '5';
    Console.readLineAsync.mockResolvedValue(mockInput);

    const result = await getMoveAttemptCount();

    expect(result).toBe(mockInput);
    expect(Console.readLineAsync).toHaveBeenCalledWith('시도할 횟수는 몇 회인가요?\n');
  });
});
