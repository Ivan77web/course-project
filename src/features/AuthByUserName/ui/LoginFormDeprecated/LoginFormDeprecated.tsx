import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ThemeButton } from '@/shared/ui/deprecated/Button';
import { Text, TextTheme } from '@/shared/ui/deprecated/Text';
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import cl from './LoginFormDeprecated.module.scss';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { getLoginLoading } from '../../model/selectors/getLoginLoading/getLoginLoading';
import { loginByUserName } from '../../model/services/loginByUserName/loginByUserName';
import { useForceUpdate } from '@/shared/lib/render/ForceUpdate';
import { Input } from '@/shared/ui/deprecated/Input';

export interface LoginFormProps {
    className?: string;
    onSuccess: () => void;
}

const initialReducers: ReducersList = {
    loginForm: loginReducer,
};

const LoginFormDeprecated = memo(({ className, onSuccess }: LoginFormProps) => {
    const { t } = useTranslation('navbar');
    const dispatch = useAppDispatch();
    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
    const error = useSelector(getLoginError);
    const isLoading = useSelector(getLoginLoading);
    const forceUpdate = useForceUpdate();

    const onChangeUserName = useCallback((val: string) => {
        dispatch(loginActions.setUserName(val));
    }, [dispatch]);

    const onChangePassword = useCallback((val: string) => {
        dispatch(loginActions.setPassword(val));
    }, [dispatch]);

    const onLoginClick = useCallback(async () => {
        const result = await dispatch(loginByUserName({ username, password }));

        if (result.meta.requestStatus === 'fulfilled') {
            // window.location.reload();
            onSuccess();
            forceUpdate();
        }
    }, [dispatch, onSuccess, username, password, forceUpdate]);

    return (
        <DynamicModuleLoader
            removeAfterUnmount
            reducers={initialReducers}
        >
            <div className={classNames(cl.LoginForm, {}, [className])}>
                <Text title={t('Форма авторизации')} />

                {error && <Text text={t('Вы ввели неверный логин или пароль')} theme={TextTheme.ERROR} />}

                <Input
                    type="text"
                    className={cl.input}
                    placeholder={t('Введите username')}
                    value={username}
                    onChange={onChangeUserName}
                    autoFocus
                />

                <Input
                    type="text"
                    className={cl.input}
                    placeholder={t('Введите пароль')}
                    value={password}
                    onChange={onChangePassword}
                />

                <Button
                    className={cl.loginBtn}
                    theme={ThemeButton.OUTLINE}
                    onClick={onLoginClick}
                    disabled={isLoading}
                >
                    {t('Войти')}
                </Button>
            </div>
        </DynamicModuleLoader>
    );
});

export default LoginFormDeprecated;
