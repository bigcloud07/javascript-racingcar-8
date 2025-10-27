export function validateEmptyCarNames(carNames) {
  const isEmptyInput = carNames.some((carName) => carName.length === 0);
  if (isEmptyInput) {
    throw new Error('[ERROR] 자동차 이름을 입력해주세요');
  }
}

export function validateSingleCarInput(carNames) {
  const isSigleCarInput = carNames.length === 1;
  if (isSigleCarInput) {
    throw new Error('[ERROR] 자동차를 2대 이상 입력해주세요');
  }
}

export function validateCarNameLength(carNames) {
  const isTooLongName = carNames.some((name) => name.length > 5);
  if (isTooLongName) {
    throw new Error('[ERROR] 자동차 이름은 5글자를 넘을 수 없습니다.');
  }
}

export function validateWhiteSpacesInNames(carNames) {
  const isWhiteSpaces = carNames.some((carName) => carName.includes(' '));
  if (isWhiteSpaces) {
    throw new Error('[ERROR] 자동차 이름 사이에 공백을 넣을 수 없습니다');
  }
}

export function validateEnglishCarNames(carNames) {
  const isEnglishCarName = carNames.some((name) => /[^a-zA-Z]/.test(name));
  if (isEnglishCarName) {
    throw new Error('[ERROR] 자동차 이름은 영문자만 사용할 수 있습니다.');
  }
}

export function validateDuplicateCarNames(carNames) {
  const uniqueNames = new Set(carNames);
  const isDuplicated = uniqueNames.size !== carNames.length;
  if (isDuplicated) {
    throw new Error('[ERROR] 자동차 이름은 중복될 수 없습니다.');
  }
}
