import { doubleNumber } from './helperFunctions';

describe('doubleNumber', () => {
    it('should double a number', () => {
        const actualResult = doubleNumber(4);
        expect(actualResult).toEqual(8);
    })
})