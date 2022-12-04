import { IFrame, IRoll } from "../../components/Frame";
import isSpare from "../isSpare";
import isStrike from "../isStrike";

function nestArray(arr: IRoll[]) {
  const result = [];
  for (let index = 0; index < arr.length; index += 2) {
    result[index / 2] = [arr[index], arr[index + 1]];
    if (index > arr.length) break;
  }
  return result;
}

export default function getFrames(rolls: IRoll[]) {
  const possibleRolls = 21;
  let resultArr = [];

  for (let index = 0; index < possibleRolls; index++) {
    resultArr[index] = typeof rolls[index] === 'number' ? rolls[index] : undefined;
  }

  const result = nestArray(resultArr).slice(0, 10);
  
  const lastFrame = result.pop();
  if (isSpare(lastFrame?.[0], lastFrame?.[1]) || isStrike(lastFrame?.[0])) {
    lastFrame?.push(resultArr[20]);
  }
  result.push(lastFrame as IFrame);

  return result;
};
