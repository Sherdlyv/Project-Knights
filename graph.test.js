import { knightsMove } from './graph.js';

describe('Tests', () => {
  test('shortest path in 1 round', () => {
    const path = knightsMove([0, 0], [1, 2]);
    expect(path).toEqual([[0, 0], [1, 2]]);
  });

  test('shortest path in 2 rounds', () => {
    const path = knightsMove([0, 0], [3, 3]);
    
    expect(path.length).toBe(3); 
    expect(path[0]).toEqual([0, 0]);
    expect(path[path.length - 1]).toEqual([3, 3]);
  });
});
