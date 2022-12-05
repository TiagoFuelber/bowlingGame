import { IFrame } from "../../components/Frame";
import isLastFrame from "../isLastFrame";
import isLastFrameButOne from "../isLastFrameButOne";
import isSpare from "../isSpare";
import isStrike from "../isStrike";

export default function getPointsForFrame(
  frameIndex: number,
  frames: IFrame[]
) {
  const result = frames
    .slice(0, frameIndex + 1)
    .reduce((points, item, index) => {
      const [roll1 = 0, roll2 = 0, roll3 = 0] = item;
      const isLast = isLastFrame(index);
      const isLastButOne = isLastFrameButOne(index);

      if (isStrike(roll1) && !isLast && !isLastButOne) {
        const nextIsStrike = isStrike(frames[index + 1][0]);
        const nextFirstRoll = (frames[index + 1][0] ?? 0);
        const nextSecondRoll = ((nextIsStrike) ? (frames[index + 2][0] ?? 0) : (frames[index + 1][1] ?? 0));
        const strikeBonus = 10 + nextFirstRoll + nextSecondRoll;
        points += strikeBonus;
      } else if (isStrike(roll1) && isLastButOne) {
        const [nextRoll1 = 0, nextRoll2 = 0, nextRoll3 = 0] = frames[index + 1];
        points += nextRoll1 + nextRoll2 + nextRoll3;  
      } else if (isSpare(roll1, roll2) && !isLast) {
        const nextFirstRoll = (frames[index + 1][0] ?? 0);
        const spareBonus = 10 + nextFirstRoll;
        points += spareBonus;
      } else if (isLast) {
        points += roll1 + roll2 + roll3;
      } else {
        points += (roll1 + roll2);
      }
      return points;
    }, 0);

  return result;
};
