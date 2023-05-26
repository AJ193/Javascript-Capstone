import countItems from './countItems.js';

describe('countItems', () => {
  test('should return number of items populated out', async () => {
    const data = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
      'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't',
      'u', 'v', 'w', 'x', 'y', 'z'];

    const result = await countItems(data);
    expect(result).toBe(12);
  });
});