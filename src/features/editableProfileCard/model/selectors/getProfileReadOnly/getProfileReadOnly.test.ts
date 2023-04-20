import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileReadOnly } from './getProfileReadOnly';

describe('getProfileIsLoading', () => {
    test('Should return read only true', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                readonly: true,
            },
        };

        expect(getProfileReadOnly(state as StateSchema)).toEqual(true);
    });

    test('Should return read only false', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                readonly: false,
            },
        };

        expect(getProfileReadOnly(state as StateSchema)).toEqual(false);
    });

    test('empty state', () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getProfileReadOnly(state as StateSchema)).toEqual(undefined);
    });
});
