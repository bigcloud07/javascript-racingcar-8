export function validateEmptyAttemptCountInput(attemptCount) {
  const isEmptyAttemptCountInput = attemptCount.length == 0;
  if (isEmptyAttemptCountInput) {
    throw new Error('[ERROR] 시행 횟수를 입력해주세요');
  }
}

export function validateWhiteSpacesInCountNumber(attemptCount) {
  const isWhiteSpaces = attemptCount.includes(' ');
  if (isWhiteSpaces) {
    throw new Error('[ERROR] 숫자 사이에 공백을 넣을 수 없습니다');
  }
}

export function validateNaturalNumber(attemptCount) {
  const isNotNaturalNumber =
    !Number.isInteger(attemptCount) || attemptCount <= 0;
  if (isNotNaturalNumber) {
    throw new Error('[ERROR] 자연수(양의 정수)를 입력해 주세요');
  }
}

export function validateIsNumber(attemptCount) {
  const isNumber = Number.isNaN(attemptCount);
  if (isNumber) {
    throw new Error('[ERROR] 숫자를 입력해주세요.');
  }
}
