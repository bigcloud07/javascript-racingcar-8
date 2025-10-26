function getMaxMoveMarkLength(carEntries) {
    return Math.max(...carEntries.map(([carName, moveMark]) => moveMark.length));
}


export function getWinner(carsObject) {
    const carEntries = Object.entries(carsObject);
    const maxMoveMarkLength = getMaxMoveMarkLength(carEntries)

    const winners = carEntries
        .filter(([carName, moveMark]) => moveMark.length === maxMoveMarkLength)
        .map(([name]) => name)

    return winners.join(", ");

}