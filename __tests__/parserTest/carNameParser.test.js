import { carNameParser } from '../../src/parser.js';

describe('carNameParser unit test', () => {
  test('정상 케이스: 앞뒤 공백 제거 + 분리', () => {
    expect(carNameParser('  pobi , woni  ')).toEqual(['pobi', 'woni']);
  });

  test('한 대만 입력 → [ERROR]', () => {
    expect(() => carNameParser('pobi')).toThrow('[ERROR]');
  });

  test('영문 외 문자 포함 → [ERROR]', () => {
    expect(() => carNameParser('포비,woni')).toThrow('[ERROR]');
  });

  test('이름 길이 5자 초과 → [ERROR]', () => {
    expect(() => carNameParser('pobi,javaji')).toThrow('[ERROR]');
  });

  test('중복 이름 → [ERROR]', () => {
    expect(() => carNameParser('pobi,pobi')).toThrow('[ERROR]');
  });
});
