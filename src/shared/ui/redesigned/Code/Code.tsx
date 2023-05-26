import { memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import CopyIcon from '@/shared/assets/icons/copyRedesigned.svg';
import cl from './Code.module.scss';
import { Icon } from '../Icon';

interface CodeProps {
    className?: string;
    text: string;
}

export const Code = memo((props: CodeProps) => {
    const { className, text } = props;

    const onCopy = useCallback(() => {
        navigator.clipboard.writeText(text);
    }, [text]);

    return (
        <pre className={classNames(cl.code, {}, [className])}>
            <Icon
                clickable
                onClick={onCopy}
                className={cl.copyBtn}
                Svg={CopyIcon}
            />
            <code>
                {text}
            </code>
        </pre>
    );
});
