import { moveAttemptCountParser } from '../../src/parser.js';

describe('moveAttemptCountParser unit test', () => {
  test("'3' → 3", () => {
    expect(moveAttemptCountParser('3')).toBe(3);
  });

  test("'  5  ' → 5 (trim)", () => {
    expect(moveAttemptCountParser('  5  ')).toBe(5);
  });

  test('빈 문자열 → [ERROR]', () => {
    expect(() => moveAttemptCountParser('')).toThrow('[ERROR]');
  });

  test('공백-only → [ERROR]', () => {
    expect(() => moveAttemptCountParser('   ')).toThrow('[ERROR]');
  });

  test("숫자 아님('abc') → [ERROR]", () => {
    expect(() => moveAttemptCountParser('abc')).toThrow('[ERROR]');
  });

  test("음수('-1') → [ERROR]", () => {
    expect(() => moveAttemptCountParser('-1')).toThrow('[ERROR]');
  });

  test('0(자연수 아님) → [ERROR]', () => {
    expect(() => moveAttemptCountParser('0')).toThrow('[ERROR]');
  });
});
