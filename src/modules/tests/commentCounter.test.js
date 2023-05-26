import countComments from './countComment.js';

describe('countComments', () => {
  test('should return the length of the array', async () => {
    const data = [1, 2, 3];
    const result = await countComments(data);
    expect(result).toBe(3);
  });

  test('should return 0 if the data is null', async () => {
    const data = null;
    const result = await countComments(data);
    expect(result).toBe(0);
  });
});