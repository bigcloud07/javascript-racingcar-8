import {
  validateEmptyCarNames,
  validateCarNameLength,
  validateSingleCarInput,
  validateWhiteSpacesInNames,
  validateEnglishCarNames,
  validateDuplicateCarNames,
} from './validate/carNameValidate.js';
import {
  validateEmptyAttemptCountInput,
  validateIsNumber,
  validateNaturalNumber,
  validateWhiteSpacesInCountNumber,
} from './validate/moveAttemptCountValidate.js';

export function carNameParser(carNames) {
  const parsedCarNames = carNames.split(',').map((carName) => carName.trim());
  validateEmptyCarNames(parsedCarNames);
  validateEnglishCarNames(parsedCarNames);
  validateCarNameLength(parsedCarNames);
  validateWhiteSpacesInNames(parsedCarNames);
  validateSingleCarInput(parsedCarNames);
  validateDuplicateCarNames(parsedCarNames);

  return parsedCarNames;
}

export function moveAttemptCountParser(moveAttemptCount) {
  const trimmedMoveAttemptCount = moveAttemptCount.trim();
  validateEmptyAttemptCountInput(trimmedMoveAttemptCount);
  validateWhiteSpacesInCountNumber(trimmedMoveAttemptCount);

  const parsedMoveAttemptCount = Number(trimmedMoveAttemptCount);
  validateIsNumber(parsedMoveAttemptCount);
  validateNaturalNumber(parsedMoveAttemptCount);

  return parsedMoveAttemptCount;
}
