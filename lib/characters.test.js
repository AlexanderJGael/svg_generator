const characters = require('./characters');

describe('characters', () => {
    it('should return the correct characters', () => {
        const input = 'abc';
        const expectedOutput = 'abc';

        expect(characters(input)).toEqual(expectedOutput);
    });

    it('should return the correct color', () => {
        const input = '#FF0000';
        const expectedOutput = '#FF0000';

        expect(characters(null, input)).toEqual(expectedOutput);
    });
});
