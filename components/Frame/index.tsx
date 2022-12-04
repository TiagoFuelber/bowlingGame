import isSpare from '../../application/isSpare';
import isStrike from '../../application/isStrike';
import styles from '../../styles/Frame.module.css';

export type IRoll = (number | undefined);

export type IFrame = [IRoll, IRoll, IRoll?];

interface IFrameProps {
  frame: IFrame,
  pointsForFrame: number,
  showLastRoll: boolean
}

export default function Frame({ frame, pointsForFrame, showLastRoll }: IFrameProps) {
  const [roll1, roll2, roll3] = frame;
  
  const getRollClassName = (roll: IRoll) => {
    return `${styles.roll} ${typeof roll === 'number' && styles.rolled}`
  }

  const isPristine = [roll1, roll2, roll3].every(item => item === undefined);
  
  const checkSpareOrStrike = () => {
    if (isStrike(roll1) && !showLastRoll) return 'X';
    if (isSpare(roll1, roll2) && !showLastRoll) return '/';
    return roll2 || 0;
  }
  
  return (
    <div>
      <div className={getRollClassName(roll1)}>{roll1 || 0}</div>
      <div className={getRollClassName(roll2)}>{checkSpareOrStrike()}</div>
      {showLastRoll && <div className={getRollClassName(roll3)}>{roll3 || 0}</div>}
      <div className={styles.points}>{isPristine ? 0 : pointsForFrame}</div>
    </div>
  )
}
