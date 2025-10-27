import { Console , Random } from '@woowacourse/mission-utils';

const MOVE_MARK = '-';

export function setCars(parsedCarNames) {
  let cars = {};
  const entries = parsedCarNames.map((carName) => [carName, '']);
  cars = Object.fromEntries(entries);

  return cars;
}

function handleCarMove(carsObject, carName) {
  const randomNum = Random.pickNumberInRange(0, 9);
  if (randomNum >= 4) {
    carsObject[carName] += MOVE_MARK;
  }
}

export function updateCarMoveCount(carsObject) {
  Object.keys(carsObject).forEach((carName) =>
    handleCarMove(carsObject, carName),
  );
}

export function raceResult(carsObject) {
  updateCarMoveCount(carsObject);
  const updatedCarsEntries = Object.entries(carsObject);
  updatedCarsEntries.forEach(([key, value]) => {
    Console.print(`${key} : ${value}`);
  });
}
