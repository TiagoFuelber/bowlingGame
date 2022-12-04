import getFrames from '../application/getFrames';
import getPointsForFrame from '../application/getPointsForFrame';

describe('should calculate the points for each frame', () => {
  it('should calculate sequence without spare or strikes', () => {
    const rolls = [1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2];
    const frames = getFrames(rolls);
    expect(getPointsForFrame(5, frames)).toBe(24);
  });

  it('should calculate sequence with spare', () => {
    const rolls = [1, 2, 3, 1, 5, 5, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2];
    const frames = getFrames(rolls);
    expect(getPointsForFrame(2, frames)).toBe(18);
  });

  it('should calculate sequence with strike', () => {
    const rolls = [1, 2, 3, 1, 10, 0, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2];
    const frames = getFrames(rolls);
    expect(getPointsForFrame(2, frames)).toBe(20);
  });

  it('should calculate sequence with spare and strike', () => {
    const rolls = [1, 2, 3, 1, 5, 5, 10, 0, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2];
    const frames = getFrames(rolls);
    expect(getPointsForFrame(3, frames)).toBe(41);
  });

  it('should calculate all strikes', () => {
    const rolls = [
      10, 0, 10, 0, 10, 0, 10, 0, 10, 0, 10, 0, 10, 0, 10, 0, 10, 0, 10, 10, 10,
    ];
    const frames = getFrames(rolls);
    expect(getPointsForFrame(9, frames)).toBe(300);
  });

  it('should calculate only first roll strike', () => {
    const rolls = [
      10,
      0,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
    ];
    const frames = getFrames(rolls);
    expect(getPointsForFrame(0, frames)).toBe(10);
  });
});
