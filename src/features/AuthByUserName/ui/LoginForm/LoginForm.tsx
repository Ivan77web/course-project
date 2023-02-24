import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import cl from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
}

export const LoginForm = ({ className }: LoginFormProps) => {
    const { t } = useTranslation('navbar');
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const onChangeUserName = (val: string) => {
        setUserName(val);
    };

    const onChangePassword = (val: string) => {
        setPassword(val);
    };

    return (
        <div className={classNames(cl.LoginForm, {}, [className])}>
            <Input
                type="text"
                className={cl.input}
                placeholder={t('Введите username')}
                value={userName}
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

            <Button className={cl.loginBtn}>
                {t('Войти')}
            </Button>
        </div>
    );
};
