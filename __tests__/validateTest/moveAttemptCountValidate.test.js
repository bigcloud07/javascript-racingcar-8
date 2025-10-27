import {
  validateEmptyAttemptCountInput,
  validateWhiteSpacesInCountNumber,
  validateIsNumber,
  validateNaturalNumber,
} from '../../src/validate/moveAttemptCountValidate.js';

describe('moveAttemptCountValidate unit test', () => {
  test('빈 문자열이면 에러', () => {
    expect(() => validateEmptyAttemptCountInput('')).toThrow('[ERROR]');
  });
  test('공백만 있어도 에러', () => {
    expect(() => validateEmptyAttemptCountInput('   '.trim())).toThrow(
      '[ERROR]',
    );
  });
  test('정상 문자열은 통과', () => {
    expect(() => validateEmptyAttemptCountInput('3')).not.toThrow();
  });
  test('숫자 내부 공백 있으면 에러', () => {
    expect(() => validateWhiteSpacesInCountNumber('1 2')).toThrow('[ERROR]');
  });
  test('숫자가 아니면 에러', () => {
    expect(() => validateIsNumber(Number('abc'))).toThrow('[ERROR]');
  });
  test('0이면 에러', () => {
    expect(() => validateNaturalNumber(0)).toThrow('[ERROR]');
  });
  test('음수면 에러', () => {
    expect(() => validateNaturalNumber(-1)).toThrow('[ERROR]');
  });
  test('유리수면 에러', () => {
    expect(() => validateNaturalNumber(1.5)).toThrow('[ERROR]');
  });
  test('양의 정수면 통과', () => {
    expect(() => validateNaturalNumber(3)).not.toThrow();
  });
});
