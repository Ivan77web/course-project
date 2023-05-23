import { Popover as HPopover } from '@headlessui/react';
import { ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DropdownDirection } from '@/shared/types/ui';
import cl from './Popover.module.scss';
import { mapDirectionClass } from '../../styles/consts';
import popupCl from '../../styles/popup.module.scss';

interface PopoverProps {
    className?: string;
    trigger: ReactNode;
    direction?: DropdownDirection;
    children: ReactNode;
}

export function Popover(props: PopoverProps) {
    const {
        className,
        trigger,
        direction = 'bottom right',
        children,
    } = props;

    const menuClasses = [mapDirectionClass[direction], popupCl.menu];

    return (
        <HPopover className={classNames(cl.Popover, {}, [className, popupCl.popup])}>
            <HPopover.Button
                className={popupCl.trigger}
                as="div"
            >
                {trigger}
            </HPopover.Button>

            <HPopover.Panel
                className={classNames(cl.panel, {}, menuClasses)}
            >
                {children}
            </HPopover.Panel>
        </HPopover>
    );
}
