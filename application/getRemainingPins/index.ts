export default function getRemainingPins(roll1: number) {
  const remaining = 10 - roll1;
  return remaining === 0 ? 10 : remaining;
} 
