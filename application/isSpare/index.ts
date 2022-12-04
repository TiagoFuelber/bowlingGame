import { IRoll } from "../../components/Frame";

export default function isSpare(roll1: IRoll, roll2: IRoll) {
  if (roll2 === undefined || roll1 === undefined) return false;
  return roll1 + roll2 === 10
}
