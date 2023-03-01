import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginLoading } from './getLoginLoading';

describe('getLoginIsLoading', () => {
    test('Should return error', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: { isLoading: true },
        };

        expect(getLoginLoading(state as StateSchema)).toEqual(true);
    });

    test('empty state', () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getLoginLoading(state as StateSchema)).toEqual(false);
    });
});
