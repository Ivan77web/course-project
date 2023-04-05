import { ChangeEvent, memo, useMemo } from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import cl from './Select.module.scss';

export interface SelectOptions<T extends string> {
    value: string;
    content: string;
}

interface SelectProps<T extends string> {
    className?: string;
    label?: string;
    options?: SelectOptions<T>[];
    value?: T;
    onChange?: (val: T) => void;
    readonly?: boolean;
}

export const Select = <T extends string>(props: SelectProps<T>) => {
    const {
        className,
        label,
        options,
        value,
        onChange,
        readonly,
    } = props;

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value as T);
    };

    const optionList = useMemo(() => {
        return options?.map((opt) => (
            <option
                className={cl.option}
                key={opt.value}
                value={opt.value}
            >
                {opt.content}
            </option>
        ));
    }, [options]);

    const mods: Mods = {};

    return (
        <div className={classNames(cl.Wrapper, mods, [className])}>
            {label && (
                <span className={cl.label}>{`${label}>`}</span>
            )}
            <select
                disabled={readonly}
                className={cl.select}
                value={value}
                onChange={onChangeHandler}
            >
                {optionList}
            </select>
        </div>
    );
};
