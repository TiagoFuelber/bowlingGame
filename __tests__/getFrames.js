import getFrames from '../application/getFrames';

describe('getFrames from rolls array', () => {
  it('should handle game without spare or strike', () => {
    const rolls = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
    expect(JSON.stringify(getFrames(rolls))).toBe(
      JSON.stringify([
        [1, 1],
        [1, 1],
        [1, 1],
        [1, 1],
        [1, 1],
        [1, 1],
        [1, 1],
        [1, 1],
        [1, 1],
        [1, 1],
      ])
    );
  });

  it('should handle unfinished game', () => {
    const rolls = [5, 3, 6, 0, 10];
    expect(JSON.stringify(getFrames(rolls))).toEqual(
      JSON.stringify([
        [5, 3],
        [6, 0],
        [10, undefined],
        [undefined, undefined],
        [undefined, undefined],
        [undefined, undefined],
        [undefined, undefined],
        [undefined, undefined],
        [undefined, undefined],
        [undefined, undefined],
      ])
    );
  });

  it('should have extra roll in the last frame if is strike or spare', () => {
    const rolls = [
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 10, 5, 1,
    ];
    expect(JSON.stringify(getFrames(rolls))).toEqual(
      JSON.stringify([
        [1, 1],
        [1, 1],
        [1, 1],
        [1, 1],
        [1, 1],
        [1, 1],
        [1, 1],
        [1, 1],
        [1, 1],
        [10, 5, 1],
      ])
    );
  });

  it('should have extra roll in the last frame if is strike or spare', () => {
    const rolls = [
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 5, 5, 1,
    ];
    expect(JSON.stringify(getFrames(rolls))).toEqual(
      JSON.stringify([
        [1, 1],
        [1, 1],
        [1, 1],
        [1, 1],
        [1, 1],
        [1, 1],
        [1, 1],
        [1, 1],
        [1, 1],
        [5, 5, 1],
      ])
    );
  });
});
