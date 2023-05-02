import { StateSchema } from '@/app/providers/StoreProvider';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { getProfileForm } from './getProfileForm';

describe('getProfileForm', () => {
    test('Should return form data', () => {
        const formObj = {
            username: 'Test name',
            first: 'Test',
            lastname: 'Test',
            age: 20,
            country: Country.Russia,
            currency: Currency.RUB,
            city: 'Moscow',
        };

        const state: DeepPartial<StateSchema> = {
            profile: {
                form: formObj,
            },
        };

        expect(getProfileForm(state as StateSchema)).toEqual(formObj);
    });

    test('empty state', () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getProfileForm(state as StateSchema)).toEqual(undefined);
    });
});
