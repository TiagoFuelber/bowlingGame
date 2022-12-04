import { IRoll } from "../../components/Frame";
import getFrames from "../getFrames";

export default function getCurrentFrameIndex(rolls: IRoll[]) {
  const index = getFrames(rolls)
    .findIndex(frame => {
      return frame.includes(undefined)
    }); 
  
  return index === -1 ? 9 : index;
};
