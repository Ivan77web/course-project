import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginUsername } from './getLoginUsername';

describe('getLoginPassword', () => {
    test('Should return error', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: { username: 'test name' },
        };

        expect(getLoginUsername(state as StateSchema)).toEqual('test name');
    });

    test('empty state', () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getLoginUsername(state as StateSchema)).toEqual('');
    });
});
