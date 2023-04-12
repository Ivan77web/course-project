import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback } from 'react';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {
    fetchProfileData,
    getProfileError,
    getProfileForm,
    getProfileIsLoading,
    getProfileReadOnly,
    getProfileValidateErrors,
    profileActions,
    ProfileCard,
    profileReducer,
    ValidateProfileErrors,
} from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useParams } from 'react-router-dom';
import { Page } from 'widgets/Page/Page';
import { VStack } from 'shared/ui/Stack';
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';

const reducers: ReducersList = {
    profile: profileReducer,
};

interface ProfilePageProps {
    className?: string;
}

const ProfilePage = memo(({ className }: ProfilePageProps) => {
    const dispatch = useAppDispatch();
    const { t } = useTranslation('profile');
    const formData = useSelector(getProfileForm);
    const error = useSelector(getProfileError);
    const isLoading = useSelector(getProfileIsLoading);
    const readOnly = useSelector(getProfileReadOnly);
    const validateErrors = useSelector(getProfileValidateErrors);
    const { id } = useParams<{ id: string }>();

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
            <Page className={classNames('', {}, [className])}>
                <VStack gap="16" max>
                    <ProfilePageHeader />

                    {validateErrors?.length && validateErrors.map((err) => (
                        <Text
                            theme={TextTheme.ERROR}
                            text={validateErrorsTranslate[err]}
                            key={err}
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
            </Page>
        </DynamicModuleLoader>
    );
});

export default ProfilePage;
