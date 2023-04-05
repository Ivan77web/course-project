import { getQueryParams } from './addQueryParams';

describe('addQueryParams.test', () => {
    test('one param', () => {
        const params = getQueryParams({
            test: 'value',
        });
        expect(params).toBe('?test=value');
    });

    test('two params', () => {
        const params = getQueryParams({
            test: 'value',
            second: 'valueTwo',
        });
        expect(params).toBe('?test=value&second=valueTwo');
    });

    test('one param is undefined', () => {
        const params = getQueryParams({
            test: 'value',
            second: undefined,
        });
        expect(params).toBe('?test=value');
    });
});
