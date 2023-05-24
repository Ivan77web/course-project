// @ts-nocheck
import React, {
    InputHTMLAttributes, memo, useEffect, useRef, useState,
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

    const [isFocused, setIsFocused] = useState(false);

    const [valueForDefineLength, setValueForDefineLength] = useState({
        value,
        selected: 0,
        valueOfSelected: '',
    });

    const mods: Mods = {
        [cl[readOnly]]: readOnly,
    };

    const isCaretVisible = isFocused && !readOnly;

    // refs

    const refBlockForDefineLength = useRef(null);
    const refCaret = useRef(null);
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

    const onBlur = () => {
        setIsFocused(false);
    };

    const onFocus = () => {
        setIsFocused(true);
    };

    const onSelect = (e: any) => {
        // const valueForDefineLengthObj = {
        //     value: valueForDefineLength.value,
        //     selected: e.target?.selectionStart || 0,
        //     valueOfSelected: valueForDefineLength?.value?.substring(0, e.target?.selectionStart || 0),
        // };

        // setValueForDefineLength(valueForDefineLengthObj);

        setValueForDefineLength({
            value: valueForDefineLength.value,
            selected: e.target?.selectionStart || 0,
            valueOfSelected: valueForDefineLength?.value?.substring(0, e.target?.selectionStart || 0) || '',
        });
    };

    const returnLetter = (letter: string, index: number) => {
        if (!readOnly) {
            if (index < valueForDefineLength.selected) {
                if (letter !== ' ') {
                    return letter;
                }
                return ' ';
            }
        }

        return '';
    };

    // useEffects

    useEffect(() => {
        if (refBlockForDefineLength?.current && refBlockForDefineLength?.current?.innerHTML && refInput.current) {
            if (refBlockForDefineLength.current.clientWidth < refInput.current.clientWidth) {
                refCaret.current.style.left = `${refBlockForDefineLength.current.clientWidth}px`;
            } else {
                refCaret.current.style.left = `${refInput.current.clientWidth}px`;
            }
        } else if (refCaret?.current && refBlockForDefineLength?.current?.innerHTML === '') {
            refCaret.current.style.left = '0px';
        }
    }, [valueForDefineLength.valueOfSelected, refInput]);

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
            {/* {placeholder && (
                <div className={cl.placeholder}>
                    {`${placeholder}>`}
                </div>
            )}

            <div className={cl.caretWrapper}>
                <input
                    ref={refInput}
                    type={type}
                    value={value}
                    onChange={onChangeHundler}
                    className={cl.input}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onSelect={onSelect}
                    readOnly={readOnly}
                    {...otherProps}
                />

                {isCaretVisible && (
                    <span
                        ref={refCaret}
                        className={cl.caret}
                    />
                )}

                <div className={cl.blockForDefineLength} ref={refBlockForDefineLength}>
                    {
                        valueForDefineLength.value?.length > 0
                            ? valueForDefineLength.value.split('').map((letter, index) => returnLetter(letter, index))
                            : ''
                    }
                </div>
            </div> */}

            <input
                ref={refInput}
                type={type}
                value={value}
                onChange={onChangeHundler}
                className={cl.input}
                onFocus={onFocus}
                onBlur={onBlur}
                onSelect={onSelect}
                readOnly={readOnly}
                {...otherProps}
            />
        </div>
    );
});
