import { memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import CopyIcon from '@/shared/assets/icons/copy.svg';
import { Button, ThemeButton } from '../../deprecated/Button/Button';
import cl from './Code.module.scss';

interface CodeProps {
    className?: string;
    text: string;
}

/**
 * @deprecated
 */

export const Code = memo((props: CodeProps) => {
    const { className, text } = props;

    const onCopy = useCallback(() => {
        navigator.clipboard.writeText(text);
    }, [text]);

    return (
        <pre className={classNames(cl.code, {}, [className])}>
            <Button onClick={onCopy} className={cl.copyBtn} theme={ThemeButton.CLEAR}>
                <CopyIcon className={cl.copyIcon} />
            </Button>
            <code>
                {text}
            </code>
        </pre>
    );
});
