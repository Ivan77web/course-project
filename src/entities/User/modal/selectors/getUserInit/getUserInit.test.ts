import { StateSchema } from 'app/providers/StoreProvider';
import { getUserInit } from './getUserInit';

describe('getUserInit', () => {
    test('Should return data', () => {
        const state: DeepPartial<StateSchema> = {
            user: {
                _inited: true,
            },
        };

        expect(getUserInit(state as StateSchema)).toEqual(true);
    });

    test('empty state', () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getUserInit(state as StateSchema)).toEqual(undefined);
    });
});
