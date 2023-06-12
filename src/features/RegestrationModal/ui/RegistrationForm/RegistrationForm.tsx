import { memo, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import cl from './RegistrationForm.module.scss';
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import {
    getNewUserAll, NewUserReducer, NewUserActions, getNewUserOnSuccess,
} from '@/entities/NewUser';
import { Input } from '@/shared/ui/redesigned/Input';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { Country, CountrySelect } from '@/entities/Country';
import { Currency, CurrencySelect } from '@/entities/Currency';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button } from '@/shared/ui/redesigned/Button';
import { registrationNewUser } from '../../model/services/registrationNewUser/registrationNewUser';
import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localStorage';
import { Text } from '@/shared/ui/redesigned/Text';

export interface RegistrationFormProps {
    className?: string;
    onSuccess: () => void;
}

const initialReducers: ReducersList = {
    newUser: NewUserReducer,
};

const RegistrationForm = memo((props: RegistrationFormProps) => {
    const dispatch = useAppDispatch();
    const { className, onSuccess } = props;
    const { t } = useTranslation('registration');
    const newUserData = useSelector(getNewUserAll);
    const newUserOnSuccess = useSelector(getNewUserOnSuccess);

    const onChangeFirst = useCallback((val: string) => {
        dispatch(NewUserActions.setFirst(val));
    }, [dispatch]);

    const onChangeLastname = useCallback((val: string) => {
        dispatch(NewUserActions.setLastname(val));
    }, [dispatch]);

    const onChangeUsername = useCallback((val: string) => {
        dispatch(NewUserActions.setUsername(val));
    }, [dispatch]);

    const onChangeAvatar = useCallback((val: string) => {
        dispatch(NewUserActions.setAvatar(val));
    }, [dispatch]);

    const onChangeAge = useCallback((val: string) => {
        let correctValue = Number(val?.replace(/\D/g, ''));

        if (String(correctValue).length > 3) {
            correctValue = Number(String(correctValue).substring(1, 4));
        }

        dispatch(NewUserActions.setAge(correctValue || 0));
    }, [dispatch]);

    const onChangeCountry = useCallback((val: Country) => {
        dispatch(NewUserActions.setCountry(val));
    }, [dispatch]);

    const onChangeCurrency = useCallback((val: Currency) => {
        dispatch(NewUserActions.setCurrency(val));
    }, [dispatch]);

    const onChangeCity = useCallback((val: string) => {
        dispatch(NewUserActions.setCity(val));
    }, [dispatch]);

    const onChangePassword = useCallback((val: string) => {
        dispatch(NewUserActions.setPassword(val));
    }, [dispatch]);

    const onRegistrationClick = useCallback(() => {
        localStorage.setItem(USER_LOCALSTORAGE_KEY, '12121212');
        dispatch(registrationNewUser());
    }, [dispatch]);

    useEffect(() => {
        if (newUserOnSuccess) {
            onSuccess();
            dispatch(NewUserActions.reset);
        }
    }, [newUserOnSuccess, onSuccess, dispatch]);

    return (
        <DynamicModuleLoader
            removeAfterUnmount
            reducers={initialReducers}
        >
            <VStack
                className={classNames(cl.registrationForm, {}, [className])}
                gap="16"
            >
                <HStack justify="center" max>
                    <Avatar
                        src={newUserData?.avatar}
                    />
                </HStack>

                {
                    (!newUserData?.freeUsername)
                    && (
                        <Text
                            variant="error"
                            text={t('Username уже занят')}
                        />
                    )
                }

                <Input
                    type="text"
                    className={cl.input}
                    placeholder={t('Введите имя')}
                    value={newUserData?.first}
                    onChange={onChangeFirst}
                    autoFocus
                />
                <Input
                    type="text"
                    className={cl.input}
                    placeholder={t('Введите фамилию')}
                    value={newUserData?.lastname}
                    onChange={onChangeLastname}
                />
                <Input
                    type="text"
                    className={cl.input}
                    placeholder={t('Введите username')}
                    value={newUserData?.username}
                    onChange={onChangeUsername}
                    autoFocus
                />
                <Input
                    type="text"
                    className={cl.input}
                    placeholder={t('Введите ссылку на аватар')}
                    value={newUserData?.avatar}
                    onChange={onChangeAvatar}
                />
                <Input
                    type="text"
                    className={cl.input}
                    placeholder={t('Введите возраст')}
                    value={newUserData?.age}
                    onChange={onChangeAge}
                    autoFocus
                />
                <CountrySelect
                    value={newUserData?.country}
                    onChange={onChangeCountry}
                />
                <CurrencySelect
                    value={newUserData?.currency}
                    onChange={onChangeCurrency}
                />
                <Input
                    type="text"
                    className={cl.input}
                    placeholder={t('Введите город')}
                    value={newUserData?.city}
                    onChange={onChangeCity}
                />
                <Input
                    type="password"
                    className={cl.input}
                    placeholder={t('Введите пароль')}
                    value={newUserData?.password}
                    onChange={onChangePassword}
                    autoFocus
                />
                <HStack justify="center" max>
                    <Button
                        className={cl.loginBtn}
                        variant="outline"
                        onClick={onRegistrationClick}
                    >
                        {t('Зарегистрироваться')}
                    </Button>
                </HStack>
            </VStack>
        </DynamicModuleLoader>
    );
});

export default RegistrationForm;
