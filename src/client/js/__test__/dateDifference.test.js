import { dateDifference } from './../daysAway'

describe("Should return 0 for current date", () => {
    const today = Date.now();
    test("Should return 0 for current date", () => {
        expect(dateDifference(today)).toBe(-0);
    });
  });
