import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { ProfileCard } from 'entities/Profile';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { VStack } from 'shared/ui/Stack';
import { getProfileForm } from '../../model/selectors/getProfileForm/getProfileForm';
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError';
import { getProfileIsLoading } from '../../model/selectors/getProfileIsLoading/getProfileIsLoading';
import { getProfileReadOnly } from '../../model/selectors/getProfileReadOnly/getProfileReadOnly';
import { getProfileValidateErrors } from '../../model/selectors/getProfileValidateErrors/getProfileValidateErrors';
import { ValidateProfileErrors } from '../../model/types/editableProfileCardSchema';
import { fetchProfileData } from '../../model/services/fetchProfileData/fetchProfileData';
import { profileActions, profileReducer } from '../../model/slice/profileSlice';
import { EditableProfileCardHeader } from '../EditableProfileCardHeader/EditableProfileCardHeader';

interface EditableProfileCardProps {
    className?: string;
    id: string;
}

const reducers: ReducersList = {
    profile: profileReducer,
};

export const EditableProfileCard = memo((props: EditableProfileCardProps) => {
    const { className, id } = props;
    const { t } = useTranslation('profile');

    const dispatch = useAppDispatch();
    const formData = useSelector(getProfileForm);
    const error = useSelector(getProfileError);
    const isLoading = useSelector(getProfileIsLoading);
    const readOnly = useSelector(getProfileReadOnly);
    const validateErrors = useSelector(getProfileValidateErrors);

    const validateErrorsTranslate = {
        [ValidateProfileErrors.INCORRECT_AGE]: t('Некорректный возраст'),
        [ValidateProfileErrors.INCORRECT_AVATAR]: t('Некорректная ссылка на аватар'),
        [ValidateProfileErrors.INCORRECT_CITY]: t('Некорректный город'),
        [ValidateProfileErrors.INCORRECT_COUNTRY]: t('Некорректная страна'),
        [ValidateProfileErrors.INCORRECT_CURRENCY]: t('Некорректная валюта'),
        [ValidateProfileErrors.INCORRECT_NAMES]: t('Некорректное имя/фамилия/username'),
        [ValidateProfileErrors.NO_DATA]: t('Данные не указаны'),
        [ValidateProfileErrors.SERVER_ERROR]: t('Серверная ошибка при сохранении'),
    };

    const onChangeFirstname = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ first: value || '' }));
    }, [dispatch]);

    const onChangeLastname = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ lastname: value || '' }));
    }, [dispatch]);

    const onChangeUsername = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ username: value || '' }));
    }, [dispatch]);

    const onChangeAge = useCallback((value?: string) => {
        const correctValue = Number(value?.replace(/\D/g, ''));
        dispatch(profileActions.updateProfile({ age: correctValue || 0 }));
    }, [dispatch]);

    const onChangeCountry = useCallback((country?: Country) => {
        dispatch(profileActions.updateProfile({ country }));
    }, [dispatch]);

    const onChangeCity = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ city: value || '' }));
    }, [dispatch]);

    const onChangeCurrency = useCallback((currency?: Currency) => {
        dispatch(profileActions.updateProfile({ currency }));
    }, [dispatch]);

    const onChangeLinkOnAvatar = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ avatar: value || '' }));
    }, [dispatch]);

    useInitialEffect(() => {
        if (id) {
            dispatch(fetchProfileData(id));
        }
    });

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <VStack gap="8" max className={classNames('', {}, [className])}>
                <EditableProfileCardHeader />

                {validateErrors?.length && validateErrors.map((err) => (
                    <Text
                        theme={TextTheme.ERROR}
                        text={validateErrorsTranslate[err]}
                        key={err}
                        data-testid="EditableProfileCard.Error"
                    />
                ))}

                <ProfileCard
                    data={formData}
                    isLoading={isLoading}
                    error={error}
                    onChangeFirstname={onChangeFirstname}
                    onChangeLastname={onChangeLastname}
                    readOnly={readOnly}
                    onChangeUsername={onChangeUsername}
                    onChangeAge={onChangeAge}
                    onChangeLinkOnAvatar={onChangeLinkOnAvatar}
                    onChangeCity={onChangeCity}
                    onChangeCurrency={onChangeCurrency}
                    onChangeCountry={onChangeCountry}
                />
            </VStack>
        </DynamicModuleLoader>
    );
});
