import { Console, Random } from '@woowacourse/mission-utils';
import {
  setCars,
  updateCarMoveCount,
  raceResult,
} from '../../src/model/carModel.js';

jest.mock('@woowacourse/mission-utils', () => ({
  Console: { print: jest.fn() },
  Random: { pickNumberInRange: jest.fn() },
}));

const setRandomPickSequence = (...sequence) => {
  Random.pickNumberInRange.mockReset();
  sequence.forEach((number) =>
    Random.pickNumberInRange.mockReturnValueOnce(number),
  );
};

beforeEach(() => {
  jest.clearAllMocks();
});

describe('carModel unit test', () => {
  test('setCars: 이름 배열을 키로 하고 값은 빈 문자열로 초기화', () => {
    expect(setCars(['pobi', 'woni', 'jun'])).toEqual({
      pobi: '',
      woni: '',
      jun: '',
    });
  });

  test('updateCarMoveCount: 랜덤 숫자값이 4 이상인 경우에만 "-" 추가', () => {
    const cars = { pobi: '', woni: '', jun: '' };

    setRandomPickSequence(4, 3, 9);

    updateCarMoveCount(cars);

    expect(cars).toEqual({ pobi: '-', woni: '', jun: '-' });
    expect(Random.pickNumberInRange).toHaveBeenCalledTimes(3);
    expect(Random.pickNumberInRange).toHaveBeenCalledWith(0, 9);
  });

  test('raceResult: 1회 이동 후 각 차의 결과를 Console.print로 출력', () => {
    const cars = { pobi: '', woni: '' };

    setRandomPickSequence(5, 0);
    raceResult(cars);

    expect(cars).toEqual({ pobi: '-', woni: '' });
    expect(Console.print).toHaveBeenCalledTimes(2);

    expect(Console.print.mock.calls).toEqual([['pobi : -'], ['woni : ']]);
  });

  test('여러 라운드 누적 이동 검증', () => {
    const cars = { a: '', b: '' };

    setRandomPickSequence(7, 4);
    raceResult(cars);
    expect(cars).toEqual({ a: '-', b: '-' });

    setRandomPickSequence(0, 9);
    raceResult(cars);
    expect(cars).toEqual({ a: '-', b: '--' });

    setRandomPickSequence(1, 8);
    raceResult(cars);
    expect(cars).toEqual({ a: '-', b: '---' });

    expect(Console.print).toHaveBeenCalledTimes(6);
  });
});
