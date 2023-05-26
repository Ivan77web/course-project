import { memo } from 'react';
import { ToggleFeatures } from '@/shared/lib/features';
import LoginFormRedesigned from '../LoginFormRedesigned/LoginFormRedesigned';
import LoginFormDeprecated from '../LoginFormDeprecated/LoginFormDeprecated';

export interface LoginFormProps {
    className?: string;
    onSuccess: () => void;
}

const LoginForm = memo((props: LoginFormProps) => {
    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={(
                <LoginFormRedesigned {...props} />
            )}
            off={(
                <LoginFormDeprecated {...props} />
            )}
        />
    );
});

export default LoginForm;
