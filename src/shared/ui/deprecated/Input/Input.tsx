// @ts-nocheck
import React, {
    InputHTMLAttributes, memo, useEffect, useRef,
} from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import cl from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'>

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string | number;
    onChange?: (value: string) => void;
    autoFocus?: boolean;
    readOnly?: boolean;
}

/**
 * @deprecated
 */

export const Input = memo((props: InputProps) => {
    const {
        className,
        value,
        onChange,
        type = 'text',
        placeholder,
        autoFocus,
        readOnly,
        ...otherProps
    } = props;

    const mods: Mods = {
        [cl[readOnly]]: readOnly,
    };

    // refs

    const refBlockForDefineLength = useRef(null);
    const refInput = useRef<HTMLInputElement>(null);

    // funcs

    const onChangeHundler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);

        setValueForDefineLength({
            value: e.target.value,
            selected: e.target?.value?.length || 0,
            valueOfSelected: e.target.value,
        });
    };

    // useEffects

    useEffect(() => {
        if (value === '' && refCaret.current) {
            refCaret.current.style.left = '0px';
        }
    }, [value]);

    useEffect(() => {
        if (autoFocus) {
            setIsFocused(true);
            refInput.current?.focus();
        }
    }, [autoFocus]);

    return (
        <div className={classNames(cl.InputWrapper, {}, [className])}>
            <input
                ref={refInput}
                type={type}
                value={value}
                onChange={onChangeHundler}
                className={cl.input}
                readOnly={readOnly}
                {...otherProps}
            />
        </div>
    );
});
