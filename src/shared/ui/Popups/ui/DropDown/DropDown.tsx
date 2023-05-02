import { Fragment, ReactNode, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Menu } from '@headlessui/react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DropdownDirection } from '@/shared/types/ui';
import cl from './DropDown.module.scss';
import { AppLink } from '../../../AppLink/AppLink';
import { mapDirectionClass } from '../../styles/consts';
import popupCl from '../../styles/popup.module.scss';

export interface DropDownItem {
    disabled?: boolean;
    content?: ReactNode;
    onClick?: () => void;
    href?: string;
}

interface DropDownProps {
    className?: string;
    items: DropDownItem[];
    trigger: ReactNode;
    direction?: DropdownDirection;
}

export const DropDown = memo((props: DropDownProps) => {
    const {
        className,
        items,
        trigger,
        direction = 'bottom left',
    } = props;
    const { t } = useTranslation();

    const menuClasses = [mapDirectionClass[direction]];

    return (
        <Menu as="div" className={classNames(cl.dropDown, {}, [className, popupCl.popup])}>
            <Menu.Button className={popupCl.trigger}>{trigger}</Menu.Button>

            <Menu.Items className={classNames(cl.menu, {}, menuClasses)}>
                {items.map((item, index) => {
                    const content = ({ active }: { active: boolean }) => (
                        <button
                            disabled={item.disabled}
                            type="button"
                            onClick={item.onClick}
                            className={classNames(cl.item, { [popupCl.active]: active }, [])}
                        >
                            {item.content}
                        </button>
                    );

                    if (item.href) {
                        return (
                            <Menu.Item as={AppLink} to={item.href} disabled={item.disabled} key={index}>
                                {content}
                            </Menu.Item>
                        );
                    }

                    return (
                        <Menu.Item as={Fragment} disabled={item.disabled} key={index}>
                            {content}
                        </Menu.Item>
                    );
                })}
            </Menu.Items>
        </Menu>
    );
});
