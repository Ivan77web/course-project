import { memo, ReactNode, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card } from '../Card/Card';
import cl from './Tabs.module.scss';
import { Flex, FlexDirection } from '../Stack/Flex/Flex';

export interface TabItem {
    value: string;
    content: ReactNode;
}

interface TabsProps {
    className?: string;
    tabs: TabItem[];
    value: string;
    onTabClick: (tab: TabItem) => void;
    direction?: FlexDirection;
}

export const Tabs = memo((props: TabsProps) => {
    const {
        className,
        tabs,
        value,
        onTabClick,
        direction = 'row',
    } = props;

    const clickHandle = useCallback((tab: TabItem) => {
        return () => {
            onTabClick(tab);
        };
    }, [onTabClick]);

    return (
        <Flex
            align="start"
            gap="8"
            direction={direction}
            className={classNames(cl.tabs, {}, [className])}
        >
            {
                tabs.map((tab) => {
                    const isSelected = tab.value === value;
                    return (
                        <Card
                            variant={isSelected ? 'light' : 'normal'}
                            key={tab.value}
                            className={classNames(cl.tab, {
                                [cl.selected]: isSelected,
                            })}
                            onClick={clickHandle(tab)}
                            border="roundBorder"
                        >
                            {tab.content}
                        </Card>
                    );
                })
            }
        </Flex>
    );
});
