import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { ValidateProfileErrors } from '../../consts/consts';
import { validateProfileData } from './validateProfileData';

const data = {
    username: 'Test name',
    first: 'Test',
    lastname: 'Test',
    age: 20,
    country: Country.Russia,
    currency: Currency.RUB,
    avatar: 'path_to_avatar',
    city: 'Moscow',
};

describe('validateProfileData', () => {
    test('success', async () => {
        const result = validateProfileData(data);

        expect(result).toEqual([]);
    });

    test('without first and lastname', async () => {
        const result = validateProfileData({ ...data, first: '', lastname: '' });

        expect(result).toEqual([ValidateProfileErrors.INCORRECT_NAMES]);
    });

    test('incorrect age', async () => {
        const result = validateProfileData({ ...data, age: -5 });

        expect(result).toEqual([ValidateProfileErrors.INCORRECT_AGE]);
    });

    test('without country', async () => {
        const result = validateProfileData({ ...data, country: undefined });

        expect(result).toEqual([ValidateProfileErrors.INCORRECT_COUNTRY]);
    });

    test('without city', async () => {
        const result = validateProfileData({ ...data, city: undefined });

        expect(result).toEqual([ValidateProfileErrors.INCORRECT_CITY]);
    });

    test('without currency', async () => {
        const result = validateProfileData({ ...data, currency: undefined });

        expect(result).toEqual([ValidateProfileErrors.INCORRECT_CURRENCY]);
    });

    test('without avatar', async () => {
        const result = validateProfileData({ ...data, avatar: undefined });

        expect(result).toEqual([ValidateProfileErrors.INCORRECT_AVATAR]);
    });

    test('incorrect all', async () => {
        const result = validateProfileData({});

        expect(result).toEqual([
            ValidateProfileErrors.INCORRECT_NAMES,
            ValidateProfileErrors.INCORRECT_AGE,
            ValidateProfileErrors.INCORRECT_COUNTRY,
            ValidateProfileErrors.INCORRECT_CITY,
            ValidateProfileErrors.INCORRECT_CURRENCY,
            ValidateProfileErrors.INCORRECT_AVATAR,
        ]);
    });
});
