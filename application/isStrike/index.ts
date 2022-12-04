import { IRoll } from "../../components/Frame";

export default function isStrike(roll: IRoll) {
  return roll === 10;
}
