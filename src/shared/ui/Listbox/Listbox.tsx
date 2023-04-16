import {
    Fragment, ReactNode, memo,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Listbox as HListbox } from '@headlessui/react';
import cl from './Listbox.module.scss';
import { Icon } from '../Icon/Icon';
import CheckMarkIcon from '../../assets/icons/checkMark.svg';
import { HStack } from '../Stack';
import { Button } from '../Button/Button';

type DropdownDirection = 'top' | 'bottom';

export interface ListBoxItem {
    value: string;
    content: ReactNode;
    disabled?: boolean;
}

interface ListboxProps {
    className?: string;
    items?: ListBoxItem[];
    value?: string;
    defaultValue?: string;
    onChange: (value: string) => void;
    readonly?: boolean;
    direction?: DropdownDirection;
    label?: string;
}

const mapDirectionClass: Record<DropdownDirection, string> = {
    bottom: cl.optionsBottom,
    top: cl.optionsTop,
};

export const Listbox = memo((props: ListboxProps) => {
    const {
        className,
        items,
        value,
        defaultValue,
        onChange,
        readonly,
        direction = 'bottom',
        label,
    } = props;

    const optionsClasses = [mapDirectionClass[direction]];

    return (
        <HStack gap="4">
            {label && <span>{`${label}>`}</span>}
            <HListbox
                as="div"
                value={value}
                onChange={onChange}
                className={classNames(cl.listbox, {}, [className])}
                disabled={readonly}
            >
                <HListbox.Button disabled={readonly} className={cl.trigger}>
                    <Button disabled={readonly}>
                        {value ?? defaultValue}
                    </Button>
                </HListbox.Button>

                <HListbox.Options className={classNames(cl.options, {}, optionsClasses)}>
                    {items?.map((item) => (
                        <HListbox.Option
                            key={item.value}
                            value={item.value}
                            disabled={item.disabled}
                            as={Fragment}
                        >
                            {({ active, selected }) => (
                                <li
                                    className={
                                        classNames(
                                            cl.item,
                                            {
                                                [cl.active]: active,
                                                [cl.disabled]: item.disabled,
                                            },
                                            [],
                                        )
                                    }
                                >
                                    <HStack>
                                        {selected && (
                                            <Icon Svg={CheckMarkIcon} className={cl.checkIcon} />
                                        )}
                                        {item.content}
                                    </HStack>
                                </li>
                            )}
                        </HListbox.Option>
                    ))}
                </HListbox.Options>
            </HListbox>
        </HStack>
    );
});
