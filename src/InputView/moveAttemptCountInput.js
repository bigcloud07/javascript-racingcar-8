import { Console } from "@woowacourse/mission-utils";

export default async function moveAttemptCountInput() {
    const moveCount = Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');
    return moveCount;
}