import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginState } from './getLoginState';

describe('getLoginPassword', () => {
    test('Should return state', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                username: 'test name',
                error: undefined,
                isLoading: false,
                password: '123',
            },
        };

        expect(getLoginState(state as StateSchema)).toEqual({
            username: 'test name',
            error: undefined,
            isLoading: false,
            password: '123',
        });
    });

    test('empty state', () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getLoginState(state as StateSchema)).toEqual(undefined);
    });
});
