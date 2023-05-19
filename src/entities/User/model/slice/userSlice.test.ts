import { User, UserSchema } from '../types/user';
import { userActions, userReducer } from './userSlice';

// const data = {
//     username: 'admin',
//     age: 22,
//     country: Country.Belarus,
//     lastname: 'qwe',
//     first: 'asd',
//     city: 'asf',
//     currency: Currency.USD,
//     avatar: 'path_to_avatar',
// };

const user: User = {
    id: '1',
    username: 'Ivan',
};

describe('userSlice', () => {
    test('setAuthData', () => {
        const state: DeepPartial<UserSchema> = {
            authData: undefined,
            _inited: false,
        };

        expect(userReducer(
            state as UserSchema,
            userActions.setAuthData(user),
        )).toEqual({
            authData: user,
            _inited: false,
        });
    });

    test('initAuthUser', () => {
        const state: DeepPartial<UserSchema> = {
            authData: undefined,
            _inited: false,
        };

        expect(userReducer(
            state as UserSchema,
            userActions.initAuthUser(),
        )).toEqual({
            authData: undefined,
            _inited: true,
        });
    });

    test('logout', () => {
        const state: DeepPartial<UserSchema> = {
            authData: user,
            _inited: false,
        };

        expect(userReducer(
            state as UserSchema,
            userActions.logout(),
        )).toEqual({
            authData: undefined,
            _inited: false,
        });
    });
});
