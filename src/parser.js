export function carNameParser (carNames) {
    const parsedCarNames = carNames.split(',').map((carName) => carName.trim());
    return parsedCarNames;
}