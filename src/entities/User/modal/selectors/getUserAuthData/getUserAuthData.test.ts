import { StateSchema } from 'app/providers/StoreProvider';
import { getUserAuthData } from './getUserAuthData';

describe('getUserAuthData', () => {
    test('Should return data', () => {
        const data = {
            id: '1',
            username: 'test name',
            avatar: '',
        };

        const state: DeepPartial<StateSchema> = {
            user: {
                authData: data,
            },
        };

        expect(getUserAuthData(state as StateSchema)).toEqual(data);
    });

    test('empty state', () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getUserAuthData(state as StateSchema)).toEqual(undefined);
    });
});
