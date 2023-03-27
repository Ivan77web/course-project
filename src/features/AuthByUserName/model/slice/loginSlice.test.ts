import { loginByUserName } from '../services/loginByUserName/loginByUserName';
import { LoginSchema } from '../types/LoginSchema';
import { loginActions, loginReducer } from './loginSlice';

describe('loginSlice', () => {
    test('test set username', () => {
        const state: DeepPartial<LoginSchema> = { username: 'test name' };

        expect(loginReducer(
            state as LoginSchema,
            loginActions.setUserName('new test name'),
        )).toEqual({ username: 'new test name' });
    });

    test('test set password', () => {
        const state: DeepPartial<LoginSchema> = { password: '123' };

        expect(loginReducer(
            state as LoginSchema,
            loginActions.setPassword('12345'),
        )).toEqual({ password: '12345' });
    });

    test('pending', () => {
        const state: DeepPartial<LoginSchema> = {
            isLoading: false,
            error: 'error',
        };

        expect(loginReducer(
            state as LoginSchema,
            loginByUserName.pending,
        )).toEqual({
            error: undefined,
            isLoading: true,
        });
    });

    test('fulfilled', () => {
        const state: DeepPartial<LoginSchema> = {
            isLoading: true,
        };

        expect(loginReducer(
            state as LoginSchema,
            loginByUserName.fulfilled,
        )).toEqual({
            isLoading: false,
        });
    });
});
