import { getWinner } from '../../src/model/winnerModel.js';

describe('getWinner unit test', () => {
  test('단일 우승자: 가장 긴 "-" 개수를 가진 차 한 대만 우승', () => {
    const cars = {
      pobi: '--',
      woni: '---',
      jun: '-',
    };
    expect(getWinner(cars)).toBe('woni');
  });

  test('공동 우승자: 동일한 길이의 "-"를 가진 차들이 모두 우승', () => {
    const cars = {
      pobi: '---',
      woni: '---',
      jun: '--',
    };
    expect(getWinner(cars)).toBe('pobi, woni');
  });

  test('모든 차가 이동 0회("")이면 전원 공동 우승', () => {
    const cars = {
      a: '',
      b: '',
      c: '',
    };
    expect(getWinner(cars)).toBe('a, b, c');
  });
});
