import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileValidateErrors } from './getProfileValidateErrors';
import { ValidateProfileErrors } from '../../types/editableProfileCardSchema';

describe('getProfileValidateErrors', () => {
    test('Should return error about incorrect city', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                validateErrors: [ValidateProfileErrors.INCORRECT_CITY],
            },
        };

        expect(getProfileValidateErrors(state as StateSchema)).toEqual(['INCORRECT_CITY']);
    });

    test('empty state', () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getProfileValidateErrors(state as StateSchema)).toEqual(undefined);
    });
});
