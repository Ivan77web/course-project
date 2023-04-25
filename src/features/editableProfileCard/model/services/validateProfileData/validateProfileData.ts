import { Profile } from 'entities/Profile';
import { ValidateProfileErrors } from '../../consts/consts';

export const validateProfileData = (profile?: Profile) => {
    if (!profile) {
        return [ValidateProfileErrors.NO_DATA];
    }

    const {
        age,
        avatar,
        city,
        country,
        currency,
        first,
        lastname,
        username,
    } = profile;

    const errors: ValidateProfileErrors[] = [];

    if (!first || !lastname || !username) {
        errors.push(ValidateProfileErrors.INCORRECT_NAMES);
    }

    if (!age || !Number.isInteger(age) || age < 0) {
        errors.push(ValidateProfileErrors.INCORRECT_AGE);
    }

    if (!country) {
        errors.push(ValidateProfileErrors.INCORRECT_COUNTRY);
    }

    if (!city) {
        errors.push(ValidateProfileErrors.INCORRECT_CITY);
    }

    if (!currency) {
        errors.push(ValidateProfileErrors.INCORRECT_CURRENCY);
    }

    if (!avatar && avatar !== null) {
        errors.push(ValidateProfileErrors.INCORRECT_AVATAR);
    }

    return errors;
};
