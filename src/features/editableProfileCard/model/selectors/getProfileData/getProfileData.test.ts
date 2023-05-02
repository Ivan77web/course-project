import { StateSchema } from '@/app/providers/StoreProvider';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { getProfileData } from './getProfileData';

describe('getProfileData', () => {
    test('Should return data', () => {
        const dataObj = {
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
                data: dataObj,
            },
        };

        expect(getProfileData(state as StateSchema)).toEqual(dataObj);
    });

    test('empty state', () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getProfileData(state as StateSchema)).toEqual(undefined);
    });
});
