import getCurrentFrameIndex from '../application/getCurrentFrameIndex.ts';

describe('Calculate the current frame index based on rolls', () => {
  it('should return the right index with complete 2 rolls', () => {
    const rolls = [ 1, 2, 3, 1, 2, 3, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined];
    expect(getCurrentFrameIndex(rolls)).toBe(3);
  });

  it('should return the right index just first roll', () => {
    const rolls = [ 1, 2, 3, 1, 2, 3, 3, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined ];
    expect(getCurrentFrameIndex(rolls)).toBe(3);
  });

  it('should return the right index when have a strike', () => {
    const rolls = [ 1, 2, 3, 1, 2, 3, 10, 0, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined ];
    expect(getCurrentFrameIndex(rolls)).toBe(4);
  });

  it('should return the right index when is the last frame', () => {
    const rolls = [
      1, 2, 3, 1, 2, 3, 10, 0, 10, 0, 10, 0, 10, 0, 5, 5, 2, 3, 2, 0,
    ];
    expect(getCurrentFrameIndex(rolls)).toBe(9);
  });

  it('should return the right index when is the last frame with strike', () => {
    const rolls = [
      1, 2, 3, 1, 2, 3, 10, 0, 10, 0, 10, 0, 10, 0, 5, 5, 2, 3, 10, undefined, undefined,
    ];
    expect(getCurrentFrameIndex(rolls)).toBe(9);
  });
});
