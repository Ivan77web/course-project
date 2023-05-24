import {
    Fragment, ReactNode, useMemo,
} from 'react';
import { Listbox as HListbox } from '@headlessui/react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DropdownDirection } from '@/shared/types/ui';
import cl from './Listbox.module.scss';
import { HStack } from '../../../Stack';
import { Button } from '../../../../redesigned/Button/Button';
import { mapDirectionClass } from '../../styles/consts';
import popupCl from '../../styles/popup.module.scss';
import { Icon } from '../../../Icon';
import ArrowIcon from '@/shared/assets/icons/arrowRedesigned.svg';

export interface ListBoxItem<T extends string> {
    value: string;
    content: ReactNode;
    disabled?: boolean;
}

interface ListboxProps<T extends string> {
    className?: string;
    items?: ListBoxItem<T>[];
    value?: T;
    defaultValue?: string;
    onChange: (value: T) => void;
    readonly?: boolean;
    direction?: DropdownDirection;
    label?: string;
}

export function Listbox<T extends string>(props: ListboxProps<T>) {
    const {
        className,
        items,
        value,
        defaultValue,
        onChange,
        readonly,
        direction = 'bottom left',
        label,
    } = props;

    const optionsClasses = [mapDirectionClass[direction], popupCl.menu];

    const selectedItem = useMemo(() => {
        return items?.find((item) => item.value === value);
    }, [items, value]);

    return (
        <HStack gap="4">
            {label && <span>{`${label}>`}</span>}
            <HListbox
                as="div"
                value={value}
                onChange={onChange}
                className={classNames(cl.listbox, {}, [className, popupCl.popup])}
                disabled={readonly}
            >
                <HListbox.Button disabled={readonly} className={cl.trigger}>
                    <Button
                        variant="filled"
                        disabled={readonly}
                        addonRight={<Icon Svg={ArrowIcon} />}
                    >
                        {selectedItem?.content ?? defaultValue}
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
                                                [popupCl.active]: active,
                                                [popupCl.disabled]: item.disabled,
                                                [popupCl.selected]: selected,
                                            },
                                            [],
                                        )
                                    }
                                >
                                    <HStack>
                                        {/* {selected && (
                                            <Icon width="20" Svg={CheckMarkIcon} className={cl.checkIcon} />
                                        )} */}
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
}
