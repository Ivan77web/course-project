import { Input } from 'shared/ui/Input/Input';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { loginActions } from '../../model/slice/loginSlice';
import cl from './LoginForm.module.scss';
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';
import { loginByUserName } from '../../model/services/loginByUserName/loginByUserName';

interface LoginFormProps {
    className?: string;
}

export const LoginForm = memo(({ className }: LoginFormProps) => {
    const { t } = useTranslation('navbar');
    const dispatch = useDispatch();
    const {
        username, password, error, isLoading,
    } = useSelector(getLoginState);

    const onChangeUserName = useCallback((val: string) => {
        dispatch(loginActions.setUserName(val));
    }, [dispatch]);

    const onChangePassword = useCallback((val: string) => {
        dispatch(loginActions.setPassword(val));
    }, [dispatch]);

    const onLoginClick = useCallback(() => {
        dispatch(loginByUserName({ username, password }));
    }, [dispatch, username, password]);

    return (
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
    );
});
